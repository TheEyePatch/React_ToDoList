import Category from './Category'

function Categories(){
  const proxy_data = [
    {id: 1, username: 'eyepatch', data: 'data_one'},
    {id: 2, username: 'theeyepatch', data: 'data_two'},
    {id: 3, username: 'kaneki', data: 'data_three'},
  ]

  return(
    <h1>
      {
        proxy_data.map(
          data => <Category key = {data.id} username = {data.username} data = {data.data} />
        )
      }
    </h1>
  )
};

export default Categories;