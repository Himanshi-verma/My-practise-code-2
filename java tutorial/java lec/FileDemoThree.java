package com.on.filedean;

import java.io.File;
import java.io.IOException;

public class FileDemoThree
{
    public static void main(String[] args)
    {
        // Here, we have defined a java.io.File
        File file = null;

        try {

            file = new File("Three.txt");
            System.out.println(file.exists()); // false

            // Here, it will create a new file named with Three.txt file
            file.createNewFile();

            System.out.println(file.exists()); // true
        } 
        // end of try block

        // A try block can have multiple catch blocks.
        catch (IOException exception) {
            exception.printStackTrace();
        }
        catch (Exception exception) {
            exception.printStackTrace();
        }
    } // end of main method
} // end of class FileDemoThree