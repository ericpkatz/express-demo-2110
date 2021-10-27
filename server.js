const express = require('express');

const app = express();

const employees = ['moe', 'larry', 'curly', 'lucy'];

app.get('/', (req, res)=> {
  res.send(`
    <html>
      <head>
        <script>
          console.log(window);
        </script>
      </head>
      <body>
        <h1>Express Demo</h1>
        <ul>
          ${ 
            employees.map( (employee, idx) => {
              return `
                <li>
                  <a href='/details/${idx}'>${employee}</a>
                </li>
              `;
            }).join('')
          }
        </ul>
      </body>
    </html>
  `);
});

app.get('/details/:id', (req, res)=> {
  const employee = employees[req.params.id];
  res.send(`
    <html>
      <head>
      </head>
      <body>
        <a href='/'>All Employees</a>
        <h1>Details for ${ employee }</h1>
      </body>
    </html>
  `);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=> console.log(`listening on port ${PORT}`));
