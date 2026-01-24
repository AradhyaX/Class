function fetchData(url) {
  fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });
}

fetchData("https://jsonplaceholder.typicode.com/todos/1");

async function fetchUserData() {
  try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json(); 
      console.log("User Data:", data);
     
      return data; 
  } catch (error) {
      console.error("Error fetching data:", error.message);
  }
}


// Calling the function
fetchUserData();

