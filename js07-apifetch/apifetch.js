async function fetchData(page) {
  const spinner = document.getElementById('spinner');
  const usersContainer = document.getElementById('users');
  usersContainer.innerHTML = ''; 
  spinner.style.display = 'block'; // Mostrar el spinner

  try {
    const response = await fetch(`https://reqres.in/api/users?delay=3&page=${page}`);
    const data = await response.json();

    data.data.forEach(user => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${user.id}</td>
        <td>${user.first_name}</td>
        <td>${user.last_name}</td>
        <td>${user.email}</td>
        <td><img src="${user.avatar}" alt="${user.first_name}" width="50"></td>
      `;
      usersContainer.appendChild(row);
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  } finally {
    spinner.style.display = 'none'; // Ocultar el spinner
  }
}