// Please Note: To see the graph plot, please follow the steps below:
// Step 1: Compile and run the Java code (this creates a .csv file named projectile_trajectory.csv).
// Step 2: Once the code has run, open a new empty file in MS Excel and go to the (Data) tab on the ribbon.
// Step 3: In the Data tab, select (From Text/CSV) option and then open the .csv file to view the plotted results.


import java.io.*;
import java.util.*;

public class ProjectileMotionSimulation {
    
    // Physical constants
    private static final double GRAVITY = 9.81; // m/s²
    private static final double AIR_DENSITY = 1.225; // kg/m³ at sea level
    
    private double timeStep = 0.01; // seconds (Δt)
    private double totalTime = 20.0; // seconds
    
    // Projectile properties
    private double mass = 0.145; // kg (baseball mass)
    private double diameter = 0.074; // m (baseball diameter)
    private double dragCoefficient = 0.47; // sphere drag coefficient
    private double crossSectionalArea;
    
    // Initial conditions
    private double initialVelocity; // m/s
    private double launchAngle; // radians
    private double initialVx, initialVy;
    
    // Arrays to store trajectory data
    private List<Double> timeArray = new ArrayList<>();
    private List<Double> xPosition = new ArrayList<>();
    private List<Double> yPosition = new ArrayList<>();
    private List<Double> xVelocity = new ArrayList<>();
    private List<Double> yVelocity = new ArrayList<>();
    private List<Double> xAcceleration = new ArrayList<>();
    private List<Double> yAcceleration = new ArrayList<>();
    
    public ProjectileMotionSimulation(double v0, double angle) {
        this.initialVelocity = v0;
        this.launchAngle = Math.toRadians(angle);
        this.crossSectionalArea = Math.PI * Math.pow(diameter/2, 2);
        
        // Calculating initial velocity components
        this.initialVx = v0 * Math.cos(this.launchAngle);
        this.initialVy = v0 * Math.sin(this.launchAngle);
    }
    
    
     //Calculating air resistance force using drag equation
     //F_drag = 0.5 * ρ * Cd * A * v^2
     
    private double calculateDragForce(double velocity) {
        return 0.5 * AIR_DENSITY * dragCoefficient * crossSectionalArea * velocity * velocity;
    }
    
    
     //Calculating acceleration components using Newton's second law
     //F = ma, therefore a = F/m
     
    private double[] calculateAcceleration(double vx, double vy) {
        double velocity = Math.sqrt(vx * vx + vy * vy);
        double dragForce = calculateDragForce(velocity);
        
        double[] acceleration = new double[2];
        
        if (velocity > 0) {
            // Drag acceleration components (opposite to velocity direction)
            double dragAcceleration = dragForce / mass;
            acceleration[0] = -dragAcceleration * (vx / velocity); // ax
            acceleration[1] = -GRAVITY - dragAcceleration * (vy / velocity); // ay
        } else {
            acceleration[0] = 0.0;
            acceleration[1] = -GRAVITY;
        }
        
        return acceleration;
    }
    

     //Simulate projectile motion using Euler's method
     //v(i+1) = v(i) + a(i)Δt
     //x(i+1) = x(i) + v(i)Δt
     
    public void simulate() {
        // Initializing starting conditions
        double t = 0.0;
        double x = 0.0, y = 0.0;
        double vx = initialVx, vy = initialVy;
        
        // Storing initial values
        timeArray.add(t);
        xPosition.add(x);
        yPosition.add(y);
        xVelocity.add(vx);
        yVelocity.add(vy);
        
        double[] acceleration = calculateAcceleration(vx, vy);
        xAcceleration.add(acceleration[0]);
        yAcceleration.add(acceleration[1]);
        
        // Euler's method integration loop
        while (y >= 0 && t < totalTime) {
            // Calculating current acceleration
            acceleration = calculateAcceleration(vx, vy);
            double ax = acceleration[0];
            double ay = acceleration[1];
            
            // Updating velocity using Euler's method: v(i+1) = v(i) + a(i)Δt
            vx = vx + ax * timeStep;
            vy = vy + ay * timeStep;
            
            // Updating position using Euler's method: x(i+1) = x(i) + v(i)Δt
            x = x + vx * timeStep;
            y = y + vy * timeStep;
            
            // Updating time
            t = t + timeStep;
            
            // Storing values
            timeArray.add(t);
            xPosition.add(x);
            yPosition.add(y);
            xVelocity.add(vx);
            yVelocity.add(vy);
            xAcceleration.add(ax);
            yAcceleration.add(ay);
            
            // Break if projectile hits ground
            if (y < 0) break;
        }
    }
    
    
      //Simulate projectile motion without air resistance for comparison
     
    public void simulateWithoutAirResistance() {
        List<Double> xPosNoAir = new ArrayList<>();
        List<Double> yPosNoAir = new ArrayList<>();
        
        double t = 0.0;
        while (t <= totalTime) {
            double x = initialVx * t;
            double y = initialVy * t - 0.5 * GRAVITY * t * t;
            
            if (y < 0 && t > 0) break;
            
            xPosNoAir.add(x);
            yPosNoAir.add(y);
            t += timeStep;
        }
        
        System.out.println("\n=== COMPARISON: WITH vs WITHOUT AIR RESISTANCE ===");
        System.out.printf("Range with air resistance: %.2f m\n", getRange());
        System.out.printf("Range without air resistance: %.2f m\n", 
                         xPosNoAir.get(xPosNoAir.size()-1));
        System.out.printf("Difference: %.2f m (%.1f%% reduction)\n", 
                         xPosNoAir.get(xPosNoAir.size()-1) - getRange(),
                         100 * (xPosNoAir.get(xPosNoAir.size()-1) - getRange()) / xPosNoAir.get(xPosNoAir.size()-1));
    }
    
    
      //Getting maximum range achieved
     
    public double getRange() {
        return xPosition.get(xPosition.size() - 1);
    }
    
    
      //Getting maximum height achieved
     
    public double getMaxHeight() {
        return Collections.max(yPosition);
    }
    
    
    //  Getting flight time
     
    public double getFlightTime() {
        return timeArray.get(timeArray.size() - 1);
    }
    
    
     //Printing detailed trajectory data
     
    public void printTrajectoryData() {
        System.out.println("\n=== TRAJECTORY DATA ===");
        System.out.printf("%-8s %-10s %-10s %-10s %-10s %-10s %-10s\n", 
                         "Time(s)", "X(m)", "Y(m)", "Vx(m/s)", "Vy(m/s)", "Ax(m/s²)", "Ay(m/s²)");
        System.out.println("------------------------------------------------------------------------");
        
        for (int i = 0; i < timeArray.size(); i += (int)(0.5/timeStep)) { // Print every 0.5 seconds
            System.out.printf("%-8.2f %-10.2f %-10.2f %-10.2f %-10.2f %-10.2f %-10.2f\n",
                             timeArray.get(i), xPosition.get(i), yPosition.get(i),
                             xVelocity.get(i), yVelocity.get(i),
                             xAcceleration.get(i), yAcceleration.get(i));
        }
    }
    
    
     //Exporting data to CSV file for Excel plotting
     
    public void exportToCSV(String filename) throws IOException {
        PrintWriter writer = new PrintWriter(new FileWriter(filename));
        writer.println("Time,X_Position,Y_Position,X_Velocity,Y_Velocity,X_Acceleration,Y_Acceleration");
        
        for (int i = 0; i < timeArray.size(); i++) {
            writer.printf("%.3f,%.3f,%.3f,%.3f,%.3f,%.3f,%.3f\n",
                         timeArray.get(i), xPosition.get(i), yPosition.get(i),
                         xVelocity.get(i), yVelocity.get(i),
                         xAcceleration.get(i), yAcceleration.get(i));
        }
        writer.close();
        System.out.println("Data exported to " + filename);
    }
    
    
     //Printing summary results
     
    public void printResults() {
        System.out.println("\n=== RESULTS ===");
        System.out.printf("Initial Velocity: %.1f m/s\n", initialVelocity);
        System.out.printf("Launch Angle: %.1f degrees\n", Math.toDegrees(launchAngle));
        System.out.printf("Maximum Range: %.2f m\n", getRange());
        System.out.printf("Maximum Height: %.2f m\n", getMaxHeight());
        System.out.printf("Flight Time: %.2f s\n", getFlightTime());
        System.out.printf("Final Velocity: %.2f m/s\n", 
                         Math.sqrt(Math.pow(xVelocity.get(xVelocity.size()-1), 2) + 
                                  Math.pow(yVelocity.get(yVelocity.size()-1), 2)));
    }
    
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.println("=== PROJECTILE MOTION  ===");
        System.out.println("This program simulates projectile motion with air resistance");
        System.out.println("using Newton's Second Law and Euler's Method\n");
        
        // Getting user input
        System.out.print("Enter initial velocity (m/s): ");
        double v0 = scanner.nextDouble();
        
        System.out.print("Enter launch angle (degrees): ");
        double angle = scanner.nextDouble();
        
        // Creating and run analysis
        ProjectileMotionSimulation physics = new ProjectileMotionSimulation(v0, angle);
        
        System.out.println("\nRunning Code...");
        physics.simulate();
        
        // Displaying results
        physics.printResults();
        physics.printTrajectoryData();
        physics.simulateWithoutAirResistance();
        
        // Exporting to .CSV
        try {
            physics.exportToCSV("projectile_trajectory.csv");
        } catch (IOException e) {
            System.out.println("Error exporting CSV: " + e.getMessage());
        }
        
        System.out.println("\n=== PHYSICS EXPLANATION ===");
        System.out.println("Newton's Second Law: F = ma");
        System.out.println("Forces acting on projectile:");
        System.out.println("1. Gravitational force: Fg = mg (downward)");
        System.out.println("2. Air resistance: Fair = 0.5ρCdAv² (opposite to velocity)");
        System.out.println("\nEuler's Method equations used:");
        System.out.println("v(i+1) = v(i) + a(i)Δt");
        System.out.println("x(i+1) = x(i) + v(i)Δt");
        
        scanner.close();
    }
}
