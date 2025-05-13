export async function POST(request) {
    const body = await request.json();
    const { contenido } = body;
    try {
      const respuesta = await fetch('https://frontdoor-prod-us-east-2-1.clickup.com/tasks/v1/subcategory/901311341091/task', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InNiVkFxWkNGdVJBPSJ9.eyJ1c2VyIjoxMzgxNDQ5ODEsInZhbGlkYXRlZCI6dHJ1ZSwic2Vzc2lvbl90b2tlbiI6dHJ1ZSwid3Nfa2V5IjoxODczMzQxNDM4LCJpYXQiOjE3NDYwNDA2MTIsImV4cCI6MTc0NjIxMzQxMn0.09PQnHirTeWBKJRjT4w6RWehg9RT6LJEtsDPQs2PI3w'
        },
        body: JSON.stringify({ name: contenido })
      });
  
      const data = await respuesta.json();
      return new Response(JSON.stringify(data), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    } catch (error) {
      console.error('Error al crear tarea:', error);
      return new Response(JSON.stringify({ message: 'Error al enviar la solicitud' }), {
        status: 500
      });
    }
  }
  