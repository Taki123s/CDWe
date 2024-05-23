package com.animeweb.controller;

import com.animeweb.dto.PaymentRequestDTO;
import com.animeweb.dto.PaymentResponeDTO;
import com.animeweb.entities.ServicePack;
import com.animeweb.entities.UserPacked;
import com.animeweb.repository.ServicePackRepository;
import com.animeweb.repository.UserPackedRepository;
import com.animeweb.service.impl.PayPalService;
import com.paypal.api.payments.Links;
import com.paypal.api.payments.Payment;
import com.paypal.base.rest.PayPalRESTException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.time.temporal.TemporalUnit;

// PaymentController.java
@RestController
@RequestMapping("/payment")
public class PaymentController {

    @Autowired
    private PayPalService payPalService;

    @Autowired
    private UserPackedRepository userRepository;
    @Autowired
    private ServicePackRepository servicePackRepository;
    @PostMapping("/create-payment")
    public ResponseEntity<?> createAndExecutePayment(@RequestBody PaymentRequestDTO request) {
        try {
            Payment payment = payPalService.createPayment(request.getAmount(), request.getCurrency(), request.getMethod(), request.getIntent(), request.getDescription(), "http://localhost:8080/payment/execute", "http://localhost:3000/execute-payment");
            String approvalUrl = null;
            for (Links link : payment.getLinks()) {
                if (link.getRel().equalsIgnoreCase("approval_url")) {
                    approvalUrl = link.getHref();
                    break;
                }
            }

            // Kiểm tra nếu approval_url đã được trích xuất thành công
            if (approvalUrl != null) {
                // Lấy userId từ request
                Long userId = request.getId();
                // Lưu thông tin cần thiết vào query parameters và trả về approvalUrl
                String redirectUrl = approvalUrl + "?userId=" + userId;
                return ResponseEntity.ok(redirectUrl);
            } else {
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error: approval_url not found");
            }
        } catch (PayPalRESTException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/execute")
    public ResponseEntity<?> executePayment(@RequestParam("paymentId") String paymentId, @RequestParam("payerId") String payerId, @RequestParam("userId") long userId, @RequestParam("serviceId") long serviceId) {
        try {
            Payment payment = payPalService.executePayment(paymentId, payerId);
            String captureId = payment.getTransactions().get(0).getRelatedResources().get(0).getSale().getParentPayment();
            UserPacked user = userRepository.findById(userId).orElse(null);
            ServicePack servicePack = servicePackRepository.findById(serviceId).get();
            LocalDateTime now =LocalDateTime.now();
            LocalDateTime expireTime = null;
          if(servicePack.getService_type().equals("DAY")){
              expireTime = now.plusDays(7);
          }
//            if (user != null) {
//                user.setCaptureId(Long.parseLong(captureId));
//                userRepository.save(user);
//            }else {
//                user = new UserPacked(userId,serviceId,expireTime,now);
//                user.setCaptureId(Long.parseLong(captureId));
//                userRepository.save(user);
//            }
            System.out.println(captureId);
            return ResponseEntity.ok("success");
        } catch (PayPalRESTException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}
