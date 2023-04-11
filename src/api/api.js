async function fetchData() {
  const response = await fetch('http://localhost:3001/financialData');
  const res = await response.json();
  return res;
}


async function addData(data) {
  await fetch('http://localhost:3001/financialData', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  const fetch_result = await fetchData();

  return {data: fetch_result}
}


async function deleteData(id) {
  await fetch(`http://localhost:3001/financialData/${id}`, {
    method: 'DELETE',
  });

  const fetch_result = await fetchData();

  return {data: fetch_result}
}


export default {
  addData,
  deleteData,
  fetchData
}
