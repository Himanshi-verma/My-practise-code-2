package com.kcc.filedemo;

import java.io.FileWriter;
import java.io.IOException;

public class FileWriterTwo
{
    public static void main(String[] args)
    {
        try (FileWriter filee = new FileWriter("Demo file"))
        {
            filee.write(99); // ascii (c)
            filee.write('\n'); // new line
            filee.write("Himanshi");
            filee.write('\n');
            filee.write("Try with resource");
        }
        catch(IOException ep)
        {
            ep.printStackTrace();
        }
        catch(Exception ep)
        {
            ep.printStackTrace();
        }
    }
}