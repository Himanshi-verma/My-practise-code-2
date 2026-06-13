package com.om.filewriter;

import java.io.FileWriter;
import java.io.IOException;

public class FileDemoFive
{
    public static void main(String[] args)
    {
        FileWriter filee = null;
        try
        {
            filee = new FileWriter("Himanshi.txt");
            filee.write(97); // will take only ascii (a)
            filee.write('\n'); // for new line
            filee.write("Himanshi");
            filee.flush(); // pushing data into file forcefully
        }
        catch(IOException ep)
        {
            // Input Output Exception
            // because we work in file with input output
            ep.printStackTrace();
        }
        catch(Exception ep)
        {
            // If somehow IOException doesn't handle the Exception, the parent Exception handles it
            ep.printStackTrace();
        }
        finally
        {
            try
            {
                filee.close(); // mandatory to close open filee
            }
            catch(Exception ep)
            {
                ep.printStackTrace();
            }
        }
    }
}