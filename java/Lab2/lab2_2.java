import java.util.StringTokenizer;

class lab2_2 {
  public static void main(String [] args){
  
  //System.out.println("Hello World");
  
  //========================================================================================//
  /*String regex = "[,\\.\\s]";

	//1- split the string using the split method 
	String target = args[0];
	String myString = "Hello From the Hello Task Way 2";
	//2- it will return an array 
	String [] stringStore = myString.split(regex);

	//3- loop on the returned array to count the target word 
	int count=0;
	for(int i=0; i< stringStore.length; i++){
    if(stringStore[i].equals(target)){
    count++;
    }
  }
	//4- if the word does not exist (count = 0)
	if(count == 0){
		//5- print word does not exist
	  System.out.println("Word Not Found!");
	}else{
		  System.out.println("Word Count Is: " + count);
	}*/
	//========================================================================================//

	 String str1 = "Hello From the Hello Task Way 1";
   String str2 = "Hello";

   int index = 0;
   int count = 0;


   while ((index = str1.indexOf(str2, index)) != -1) {
            count++;
            index += str2.length();
        }
        System.out.println(count);
	  
	//========================================================================================//
	/*StringTokenizer st1 = new StringTokenizer(
            "Hello From the Hello Task Tokenizer", " ");

	 while (st1.hasMoreTokens()){System.out.println(st1.nextToken());}*/
	//========================================================================================//
  /*String ip = "192.168.1.1";
  String regex = "[,\\.\\s]";
  String [] ipOctets = ip.split(regex);
  for(int i=0; i< ipOctets.length; i++){
   System.out.println(ipOctets[i]);
  }*/
  
  
  
  }
}
