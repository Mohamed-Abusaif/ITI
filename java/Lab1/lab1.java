class lab1 {
public static void main(String [] args){
	//System.out.println("Hello World");
	if(args.length <=0)
	{
		System.out.println("Please Provide Your Valid Input");
	}
	else
	{
		int terminator=1;
		System.out.println("X Value Is:" + args[0] + " - Y Value Is:" + args[1]);

		int numberOfIterations=0;
		try{
			numberOfIterations = Integer.parseInt(args[0]);
		}
		catch(Exception e){
			System.out.println("Please Enter Valid Numerical Value");
		}
		if( numberOfIterations >0)
		{
			for(int i=0; i< numberOfIterations; i++)
			{
				System.out.println(i +"-"+ args[1]);

			}
		}
		else
		{
			System.out.println("Please Enter a Number above Zero");
		}
	}


}
}
