package com.animeweb.controller;

import com.animeweb.dto.PaymentRequestDTO;
import com.animeweb.dto.PaymentResponeDTO;
import com.animeweb.entities.UserPacked;
import com.animeweb.repository.UserPackedRepository;
import com.animeweb.service.impl.PayPalService;
import com.paypal.api.payments.Links;
import com.paypal.api.payments.Payment;
import com.paypal.base.rest.PayPalRESTException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

// PaymentController.java
@RestController
@RequestMapping("/payment")
public class PaymentController {

    @Autowired
    private PayPalService payPalService;

    private PaymentResponeDTO paymentResponeDTO;
    @Autowired
    private UserPackedRepository userRepository;

    @PostMapping("/create-payment")
    public ResponseEntity<?> createPayment(@RequestBody PaymentRequestDTO request) {
        try {
            Payment payment = payPalService.createPayment(request.getAmount(), request.getCurrency(), request.getMethod(), request.getIntent(), request.getDescription(), "http://localhost:8080/movie/index", "http://localhost:3000/movie/index");
            String approvalUrl = null;
            for (Links link : payment.getLinks()) {
                if (link.getRel().equalsIgnoreCase("approval_url")) {
                    approvalUrl = link.getHref();
                    break;
                }
            }

            // Kiểm tra nếu approval_url đã được trích xuất thành công
            if (approvalUrl != null) {
                paymentResponeDTO = new PaymentResponeDTO();
                paymentResponeDTO.setPaymentId(payment.getId());
                paymentResponeDTO.setUrl(approvalUrl);
                return ResponseEntity.ok(paymentResponeDTO);
            } else {
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error: approval_url not found");
            }
        } catch (PayPalRESTException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/execute-payment")
    public ResponseEntity<?> executePayment(@RequestParam("paymentId") String paymentId, @RequestParam("payerId") String payerId, @RequestParam("userId") Long userId) {
        try {
            Payment payment = payPalService.executePayment(paymentId, payerId);
            String captureId = payment.getTransactions().get(0).getRelatedResources().get(0).getSale().getParentPayment();
            UserPacked user = userRepository.findById(userId).orElse(null);
            if (user != null) {
                user.setCaptureId(Long.parseLong(captureId));
                userRepository.save(user);
            }
            return ResponseEntity.ok(payment.getId()); // Trả về ID của giao dịch
        } catch (PayPalRESTException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}
