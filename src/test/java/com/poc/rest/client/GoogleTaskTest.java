package com.poc.rest.client;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.util.HashMap;
import java.util.List;
import java.util.Random;

import com.google.api.services.tasks.Tasks;
import com.google.api.services.tasks.model.TaskList;
import com.google.api.services.tasks.model.TaskLists;
import com.poc.rest.client.test.GoogletaskPOC;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class GoogleTaskTest   {


	Tasks service;
	  private static String tasklistid="";
	    private static String tasktomove="";
	    private static String title;
	    private static TaskList taskList;
static 	HttpURLConnection conn;
	
	@Given("^a valid google user is logged in$")
	public void valid_google_user_login() throws IOException {
		
		// Build a new authorized API client service.
         service = GoogletaskPOC.getTasksService();
        
		System.out.println("inside given");
		
	
	}
	
	@When("^he requested task \"([^\"]*)\" creation under taskList \"([^\"]*)\"$")
	public void fetch_task_lists(String taskTitle, String taskListName) {
		title = taskTitle;
		taskList = getTaskID(taskListName);
	}
	
	@When("^he requested to move the task \"([^\"]*)\" under taskList \"([^\"]*)\"$")
	public void fetch_task_lists_to_move(String taskTitle, String taskListName) {
		title = taskTitle;
		taskList = getTaskID(taskListName);
		try {
			GoogletaskPOC.gettaskslistService(service, taskList.getId(), taskTitle);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	
	
	@Then("^the task should be moved$")
	public void the_task_should_be_moved() {
	try {
		GoogletaskPOC.movetasksService(service, taskList.getId());
	} catch (IOException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
	}
	
	
	@Then("^the task should be created$")
	public void the_task_should_be_created() {
		try {
			GoogletaskPOC.CreateTaskService(service,taskList.getId(),title);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	public TaskList getTaskID(String taskListName) {
	
		 // Print the first 10 task lists.
        TaskLists result = new TaskLists();
        TaskList resultList = new TaskList();
		try {
			result = service.tasklists().list()
			     .setMaxResults(Long.valueOf(10))
			     .execute();
		} catch (IOException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
        
        List<TaskList> tasklists = result.getItems();
        if (tasklists == null || tasklists.size() == 0) {
            System.out.println("No task lists found.");
        } else {
            System.out.println("Task lists:");
            for (TaskList tasklist : tasklists) {
                System.out.printf("%s (%s)\n",
                        tasklist.getTitle(),
                        tasklist.getId());
                
                if(tasklist.getTitle().equalsIgnoreCase(taskListName)){
                	resultList = tasklist;
                	tasklistid=tasklist.getId();
                	break;
                }
                                        		           
            }                      
        }
		return resultList;
	}

	public static void get_success_message(HashMap<String, String> excelData, String scenario) throws IOException {
		
		BufferedReader br = new BufferedReader(new InputStreamReader(
				(conn.getInputStream())));

		String output;
		StringBuilder strbuilder = new StringBuilder();

		System.out.println("Output from Server .... \n");
		while ((output = br.readLine()) != null) {

			strbuilder.append(output);
	
		}
		
	}

	public static void get_error_message(HashMap<String, String> excelData, String scenario) {
		
		
	
	
	}

	Integer getRequestId() {
		int min = 100000000;
		int max = 999999999;
		Random r = new Random();
		return r.nextInt((max - min) + 1) + min;
	}

}