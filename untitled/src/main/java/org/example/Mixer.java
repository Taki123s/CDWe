package org.example;

public class Mixer {
   Mixer m1;
   Mixer() { }
   Mixer(Mixer m) {this.m1 = m;}
   void go() {System.err.print("hi "); }
   public static void main(String[] args) {
      Mixer m2 = new Mixer();
      Mixer m3 = new Mixer(m2);
      m3.go();
      Mixer m4 = m3.m1;
      m4.go();
   }
}
