class DescriptiveStatistics {
    constructor(data) {
      this.data = data;
    }
  
    // Measurement of Central Tendency: Mean
    mean() {
      const sum = this.data.reduce((acc, value) => acc + value, 0);
      return sum / this.data.length;
    }
  
    // Measure of Central Tendency: Median
    median() {
      const sortedData = this.data.slice().sort((a, b) => a - b);
      const middle = Math.floor(sortedData.length / 2);
  
      if (sortedData.length % 2 === 0) {
        return (sortedData[middle - 1] + sortedData[middle]) / 2;
      } else {
        return sortedData[middle];
      }
    }
  
    // Measurement of Central Tendency: Mode
    mode() {
      const frequencyMap = {};
      this.data.forEach((value) => {
        frequencyMap[value] = (frequencyMap[value] || 0) + 1;
      });
  
      let maxFrequency = 0;
      let modes = [];
  
      for (const value in frequencyMap) {
        const frequency = frequencyMap[value];
  
        if (frequency > maxFrequency) {
          maxFrequency = frequency;
          modes = [value];
        } else if (frequency === maxFrequency) {
          modes.push(value);
        }
      }
  
      return modes.map(Number);
    }
  
    // Measure of Dispersion: Range
    range() {
      const sortedData = this.data.slice().sort((a, b) => a - b);
      return sortedData[sortedData.length - 1] - sortedData[0];
    }
  
    // Measure of Dispersion: Variance
    variance() {
      const meanValue = this.mean();
      const squaredDifferences = this.data.map((value) => (value - meanValue) ** 2);
      const sumOfSquaredDifferences = squaredDifferences.reduce((acc, value) => acc + value, 0);
      return sumOfSquaredDifferences / this.data.length;
    }
  
    // Measure of Dispersion: Standard Deviation
    standardDeviation() {
      return Math.sqrt(this.variance());
    }
  
    // Measure of Dispersion: Interquartile Range (IQR)
    interquartileRange() {
      const sortedData = this.data.slice().sort((a, b) => a - b);
      const middle = Math.floor(sortedData.length / 2);
  
      if (sortedData.length % 2 === 0) {
        const lowerHalf = sortedData.slice(0, middle);
        const upperHalf = sortedData.slice(middle);
        const lowerQuartile = new DescriptiveStatistics(lowerHalf).median();
        const upperQuartile = new DescriptiveStatistics(upperHalf).median();
        return upperQuartile - lowerQuartile;
      } else {
        const lowerHalf = sortedData.slice(0, middle);
        const upperHalf = sortedData.slice(middle + 1);
        const lowerQuartile = new DescriptiveStatistics(lowerHalf).median();
        const upperQuartile = new DescriptiveStatistics(upperHalf).median();
        return upperQuartile - lowerQuartile;
      }
    }
  }
  
  // Example usage
  const data = [10, 15, 9, 16, 8, 14, 2, 6, 7, 14, 23, 30, 19];
  const stats = new DescriptiveStatistics(data);
  console.log(" ");
  console.log("Descriptive Statistics Data Below:");
  console.log(" ");
  console.log("Mean:", stats.mean());
  console.log("Median:", stats.median());
  console.log("Mode:", stats.mode());
  console.log("Range:", stats.range());
  console.log("Variance:", stats.variance());
  console.log("Standard Deviation:", stats.standardDeviation());
  console.log("Interquartile Range (IQR):", stats.interquartileRange());