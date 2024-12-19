import java.util.Random;

class lab2_1 {

  static int BinarySearch(int [] newArray , int target) {
  //implementing binary search algorithm:
   int low = 0;
  int high = newArray.length-1;


    
   while(low <= high){
    System.out.println("I'm in the function know searching!");
       int mid = (high + low) / 2;
    if(target == newArray[mid]){
      System.out.println("Item Found!");
      return mid;
    }
    
    if( target < newArray[mid]){
      high = mid-1;
    }
    if(target > newArray[mid]){
      low = mid+1;
    }
    
   }
   return -1;
   
  }

  public static void main(String[] args){
    /* Random Array :
    int max =0;
    int min =1001;
    
    long startTime = System.nanoTime();
    int newArray[] = new int[1000];
    Random random = new Random();
    for (int i = 0; i < 1000; i++) {
            newArray[i] = random.nextInt(1000); 
    }
    //for minimum Value
    for (int i = 0; i < 1000; i++) {
            if( newArray[i] <=min){
              min=newArray[i];
            }
    }
    //for Maximum Value:
     for (int i = 0; i < 1000; i++) {
            if( newArray[i] >= max){
              max=newArray[i];
            }
    }
    //for Printing all elements:
    /*for (int i = 0; i < 1000; i++) {
              System.out.println("Element Number : "+ i + " Is: " + newArray[i] );
    }*/
    
    /*
    long endTime   = System.nanoTime();
    long totalTime = endTime - startTime;
    //to get the time in seconds:
    //System.out.println("Program Finished In "+totalTime/1000000000+" Seconds.");
    //time in other format     
    System.out.println("Program Finished In "+totalTime);
    System.out.println("Minimum Value Is: "+min);
    System.out.println("Maximum Value Is: "+max);*/
    
    //-------------------------------------------------------------------//
    //With Binary Search:
    int target=Integer.parseInt(args[0]);

    long startTime = System.nanoTime();
    
    int newArray[] = new int[1000];
    for (int i = 0; i < 1000; i++) {
            newArray[i] = i; 
    }
    
    /*for (int i = 0; i < 1000; i++) {
            System.out.println("Element Number : "+ i + " Is: " + newArray[i] );
    }*/
   
    int result = BinarySearch(newArray, target);
    
    long endTime   = System.nanoTime();
    long totalTime = endTime - startTime;
    System.out.println("Program Finished In "+totalTime);
    System.out.println("Target Found: " + result);
    
    
    
    
    
    
    
    
  }

}
