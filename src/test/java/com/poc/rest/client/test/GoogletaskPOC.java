package com.poc.rest.client.test;
import com.google.api.client.auth.oauth2.Credential;
import com.google.api.client.extensions.java6.auth.oauth2.AuthorizationCodeInstalledApp;
import com.google.api.client.extensions.jetty.auth.oauth2.LocalServerReceiver;
import com.google.api.client.googleapis.auth.oauth2.GoogleAuthorizationCodeFlow;
import com.google.api.client.googleapis.auth.oauth2.GoogleClientSecrets;
import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport;
import com.google.api.client.http.HttpTransport;

import com.google.api.client.json.jackson2.JacksonFactory;
import com.google.api.client.json.JsonFactory;
import com.google.api.client.util.store.FileDataStoreFactory;
import com.google.api.services.tasks.TasksScopes;
import com.google.api.services.tasks.model.*;
import com.google.api.services.tasks.Tasks;

import com.google.api.services.tasks.Tasks.TasksOperations.Move;

import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.List;
public class GoogletaskPOC {
	 /** Application name. */
    private static final String APPLICATION_NAME =	
        "Google Tasks POC";
    private static String tasklistid="";
    private static String tasktomove="";
    /** Directory to store user credentials for this application. */
    private static final java.io.File DATA_STORE_DIR = new java.io.File(
        System.getProperty("user.home"), ".credentials/tasks-java-quickstart");

    /** Global instance of the {@link FileDataStoreFactory}. */
    private static FileDataStoreFactory DATA_STORE_FACTORY;

    /** Global instance of the JSON factory. */
    private static final JsonFactory JSON_FACTORY =
        JacksonFactory.getDefaultInstance();

    /** Global instance of the HTTP transport. */
    private static HttpTransport HTTP_TRANSPORT;

    /** Global instance of the scopes required by this quickstart.
     *
     * If modifying these scopes, delete your previously saved credentials
     * at ~/.credentials/tasks-java-quickstart
     */
    private static final List<String> SCOPES = 
        Arrays.asList(TasksScopes.TASKS);
    
//    private static final java.util.Collection<String> SCOPES =
//    	    DriveScopes.all();

    static {
        try {
            HTTP_TRANSPORT = GoogleNetHttpTransport.newTrustedTransport();
            DATA_STORE_FACTORY = new FileDataStoreFactory(DATA_STORE_DIR);
        } catch (Throwable t) {
            t.printStackTrace();
            System.exit(1);
        }
    }

    /**
     * Creates an authorized Credential object.
     * @return an authorized Credential object.
     * @throws IOException
     */
    public static Credential authorize() throws IOException {
        // Load client secrets.
        InputStream in =
        		GoogletaskPOC.class.getResourceAsStream("/client_secret.json");
        GoogleClientSecrets clientSecrets =
            GoogleClientSecrets.load(JSON_FACTORY, new InputStreamReader(in));

        // Build flow and trigger user authorization request.
        GoogleAuthorizationCodeFlow flow =
                new GoogleAuthorizationCodeFlow.Builder(
                        HTTP_TRANSPORT, JSON_FACTORY, clientSecrets, SCOPES)
                .setDataStoreFactory(DATA_STORE_FACTORY)
                .setAccessType("offline")
                .build();
        Credential credential = new AuthorizationCodeInstalledApp(
            flow, new LocalServerReceiver()).authorize("user");
        System.out.println(
                "Credentials saved to " + DATA_STORE_DIR.getAbsolutePath());
        return credential;
    }

    /**
     * Build and return an authorized Tasks client service.
     * @return an authorized Tasks client service
     * @throws IOException
     */
    public static Tasks getTasksService() throws IOException {
        Credential credential = authorize();
        return new Tasks.Builder(
                HTTP_TRANSPORT, JSON_FACTORY, credential)
                .setApplicationName(APPLICATION_NAME)
                .build();
    }
    
    
   
    public static void CreateTaskService(Tasks service,String strtaskid,String strTaskName) throws IOException {
    	Task task = new Task();
    	task.setTitle(strTaskName);    	
    	Task result = service.tasks().insert(strtaskid, task).execute();
    	System.out.println(result.getTitle());
    	System.out.printf("New Task %s (%s)\n",
    			 result.getTitle(),
    			 result.getId());
    	//String strTasktitle =result.getTitle();
    	//return strTasktitle;
    }
    public static void gettaskslistService(Tasks service,String strtaskid, String taskTitle) throws IOException {
    	String taskToMove;
    	com.google.api.services.tasks.model.Tasks result1 = service.tasks().list(strtaskid).execute();
   	 	List<Task> tasks1 = result1.getItems();    	   
	   	 if (tasks1 == null || tasks1.size() == 0) {
	         System.out.println("No task lists found.");
	     } else {
	    	 System.out.println("New Added Task lists:");
	            for (Task tasklist : tasks1) {
	                System.out.printf("%s (%s)  (%s)\n",
	                        tasklist.getTitle(),
	                        tasklist.getId(),
	                        tasklist.getPosition());
	                if(tasklist.getTitle().contains(taskTitle)){
	                	tasktomove=tasklist.getId();
	                	System.out.println("Task to Move:"+ tasktomove   + "\nTitle:" + tasklist.getTitle()+ "\nPosition:" + tasklist.getPosition());
	                	break;
	                }
	            }
	     }  
	   	 
	   	
    }
    public static void movetasksService(Tasks service, String taskListid) throws IOException {
    	
    	  Move move = service.tasks().move(taskListid, tasktomove);
    	  
    	  Task result2 = move.execute();   
    	  
    	  System.out.println("Moved Task Id :"+result2.getId()+"\nTitle:" + result2.getTitle()+ "\nPosition:" + result2.getPosition());
    }
  
    public static void main(String[] args) throws IOException {
        // Build a new authorized API client service.
        Tasks service = getTasksService();

        // Print the first 10 task lists.
        TaskLists result = service.tasklists().list()
             .setMaxResults(Long.valueOf(1))
             .execute();
        
        List<TaskList> tasklists = result.getItems();
        if (tasklists == null || tasklists.size() == 0) {
            System.out.println("No task lists found.");
        } else {
            System.out.println("Task lists:");
            for (TaskList tasklist : tasklists) {
                System.out.printf("%s (%s)\n",
                        tasklist.getTitle(),
                        tasklist.getId());
                tasklistid=tasklist.getId();
                for(int i=0; i<=3;i++)
                {
                	int j=i+1;
                	CreateTaskService(service,tasklist.getId(),"NewTask_POC"+j);
                }                            		           
            }                      
        }
       /* gettaskslistService(service,tasklistid);

        movetasksService(service);*/
    }

}
