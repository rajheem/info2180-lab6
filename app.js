const url='superheroes.php';
const queryParams='?query=';
window.onload=()=>{
  let result=document.getElementById('result');
  let button=document.getElementById('search');
  fetch(url)
  .then(response=>{
    if(response.ok){
      return response.text()
    }else{
      return Promise.reject('something went wrong')
    }
  })
  .then(data=>{
    result.innerHTML=data;
  })
  .catch(error=>{
    result.innerHTML='Issue with connection';
  });
  button.onclick=()=>{
    event.preventDefault();
    const wordQuery=document.getElementById('avengename').value;
    alert (wordQuery);
    const endpoint=`${url}${queryParams}${wordQuery}`;
    alert(endpoint);
    fetch(endpoint)
    .then(response=>{
      if(response.ok){
        return response.text()
      }else{
        return Promise.reject('something went wrong')
      }
    })
    .then(data=>{
      result.innerHTML=data;
    })
    .catch(error=>{
      result.innerHTML='Issue with connection';
    });
  }
}
