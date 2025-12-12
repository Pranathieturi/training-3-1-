package com.mruh.oops;

public class Employee{
	public int empNumber;
	public String empName;
	public String empJob;
	private String empPwd;
	public int emoDeptNo;
	
	private void printLine(int noOfTimes) {
		for (int i = 0; i < noOfTimes; i++) {
			 System.out.print("*");
		}
		System.out.println(){
			
	}
	public void printEmpStmt() {
		printLine(30);
		System.out.println("Employee Number:" + "\t" + empNumber);
		System.out.println("Employee Name:" + "\t" + empName);
		System.out.println("Employee Job:" + "\t" + empJob);
		System.out.println("Employee Department NUmber:" + "\t" + empDeptNo);
		printLine(30);
	}
public class EmpDemo {
    public static void main(String[] args) {
        System.out.println("I AM FROM MAIN METHOD");
        Employee employee = new Employee();
        System.out.println(employee);
        employee.printEmpStmt();
        employee.empNumber = 111;
        employee.empName = "Pranathi";
        employee.empJob = "student";
        employee.emoDeptNo = 8;

        employee.printEmpStmt();

    }
}

