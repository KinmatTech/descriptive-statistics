class MathOperations {
    // Class property
    static PI = 3.14;
  
    // Class method
    static square(num) {
      return num * num;
    }
  
    // Alternative class method
    static circumference(radius) {
      return 2 * MathOperations.PI * radius;
    }
  }
  
  // Retrieving class property
  console.log("PI:", MathOperations.PI);
  
  // Using class method
  const answer = MathOperations.square(10);
  console.log("Square of 4:", answer);
  
  // Using another class method
  const circumference = MathOperations.circumference(6);
  console.log("Circumference of a circle with radius 3:", circumference);
  