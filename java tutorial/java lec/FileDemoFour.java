package com.om.filedemo;

import java.io.File;

public class FileDemoFour
{
    public static void main(String[] args)
    {
        File file = new File("Himanshi.txt");
        System.out.println(file.exists()); // false
    } // Close of main method
} // Close of Class FileDemoFour