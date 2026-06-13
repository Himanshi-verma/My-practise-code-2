package com.cn.exceptionhandling;

public class ThrowsDemoThree
{
    public static void m1() throws ArithmeticException
    {
        System.out.println(10/0);
    }

    public static void main(String[] args)
    {
        // main method is calling m1 method
        m1();
    }
}