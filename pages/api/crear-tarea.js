async function refreshClickUpToken() {
  const response = await fetch('https://id.app.clickup.com/auth/v1/refresh_token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Cookie: `_scid=E5sk73FNuCrFzQW7les2PQSg4G3WYGhG; _fbp=fb.1.1745248154212.780966092607296814; singular_device_id=ac8efc66-df51-4e37-94d6-7482c1227ffd; _mkto_trk=id:081-RDB-797&token:_mch-clickup.com-f54b4e693b04bddee2d19cf46c61c5b7; cb_user_id=null; cb_group_id=null; cb_anonymous_id=%229b33d49a-e152-4fa3-8c92-565abe60d9b6%22; _tt_enable_cookie=1; _ttp=01JSCEAY1MVV1MFXTXDDQQZMXT_.tt.1; _ga=GA1.1.890272553.1745248686; _pin_unauth=dWlkPU5UVmpPR0ZtTVRVdE9Ea3dPQzAwTVRNMkxUazNZMk10TTJVeE9XSmlOVFV6TWpRMw; _gcl_aw=GCL.1746039381.Cj0KCQjwlMfABhCWARIsADGXdy_nt4x29TORY5rw0pk9G7sKlCgY_nUHDxdo2vCxMn3c3c1W8Y8dRVEaAoJeEALw_wcB; _pin_unauth=dWlkPU5UVmpPR0ZtTVRVdE9Ea3dPQzAwTVRNMkxUazNZMk10TTJVeE9XSmlOVFV6TWpRMw; cu-redirect-to-app=true; _gcl_au=1.1.496904479.1746039389.320393680.1746039444.1746040613; ajs_group_id=90131228957; cu_refresh=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InNiVkFxWkNGdVJBPSJ9.eyJ1c2VyIjoxMzgxNDQ5ODEsInJlZnJlc2giOnRydWUsImRhdGVJc3N1ZWQiOjE3NDcwMDA0Mjg2ODAsIndzX2tleSI6IjE4NzMzNDE0MzgiLCJzZXNzaW9uX3Rva2VuIjp0cnVlLCJpYXQiOjE3NDcwMDA0Mjh9.7wqZVEA8twvpVVbHLV-ezIZUaNkGB69bkUY7odufuCY; utm_source=(none); utm_medium=(direct); utm_campaign=; utm_content=; utm_term=; OptanonAlertBoxClosed=2025-05-13T19:19:23.857Z; OptanonConsent=isGpcEnabled=0&datestamp=Tue+May+13+2025+13%3A19%3A24+GMT-0600+(hora+est%C3%A1ndar+central)&version=202409.1.0&browserGpcFlag=0&isIABGlobal=false&hosts=&consentId=cfef82a4-6dc6-4605-86a6-c7e5766d4542&interactionCount=1&isAnonUser=1&landingPath=NotLandingPage&groups=C0001%3A1%2CC0002%3A1%2CC0003%3A1%2CC0004%3A1&AwaitingReconsent=false&geolocation=MX%3BCOA; ottbpmfpc=0e048cd3-2a76-4572-b115-adf79bb27de2; utm_stamp=Tue, 13 May 2025 19:49:24 GMT; _rdt_uuid=1745248152599.bec5c6e6-5356-451f-905e-594c201e6907; _scid_r=HRsk73FNuCrFzQW7les2PQSg4G3WYGhGUNNDfQ; _ScCbts=%5B%5D; _uetsid=2ea37be0302f11f0a7de87d5a466873c; _uetvid=966657201ec211f0b075f79a0123d818; _sctr=1%7C1747116000000; FPID=FPID2.2.DQUB6O1NedZyF9moHrsriH6%2By7ucan6oJHYA6JFDpNk%3D.1745248686; FPLC=VqtoAyoNzcv4dNX8S2mrz6G9Jg%2BVNvZNjKjo4AF5jC7rm8OcdpvZ5%2BF3AhM2v%2Baeg12sd1%2FJO9JKFaZDx0hFqbRA7LHivjh1sSpRIEZoSfLlvWUllfW9bkaX8BYU6Q%3D%3D; ttcsid=1747163967079::bEpP7hAncnY0Fw4K3zYB.4.1747163967079; __q_state_2qYJ2dzsqrwWZnjR=eyJ1dWlkIjoiYzVhOTMxYWMtZGYzYi00MGI0LWJmNzktNmZjMTI0YjM2OGJkIiwiY29va2llRG9tYWluIjoiY2xpY2t1cC5jb20iLCJhY3RpdmVTZXNzaW9uSWQiOm51bGwsInNjcmlwdElkIjoiMTY0NTY2MzU4NjEzODM0MjExNCIsIm1lc3NlbmdlckV4cGFuZGVkIjpmYWxzZSwicHJvbXB0RGlzbWlzc2VkIjpmYWxzZSwiY29udmVyc2F0aW9uSWQiOiIxNjUzOTY0NTI0MzY2NTEyODM3In0=; ttcsid_CA6HB9JC77UC097IL640=1747163967078::9_ltqUWlLaN0o7bS9_-g.4.1747163967356; _ga_KFQ1L1LHHQ=GS2.1.s1747163965$o1$g1$t1747163990$j0$l0$h1258071008; ajs_user_id=138144981; ajs_anonymous_id=84a88c01-ecc5-4e00-8c1d-d62d2019dfc2; analytics_session_id=1747162991749; cu_jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InNiVkFxWkNGdVJBPSJ9.eyJ1c2VyIjoxMzgxNDQ5ODEsInZhbGlkYXRlZCI6dHJ1ZSwid3Nfa2V5IjoiMTg3MzM0MTQzOCIsInNlc3Npb25fdG9rZW4iOnRydWUsImlhdCI6MTc0NzE2NDA1NCwiZXhwIjoxNzQ3MzM2ODU0fQ.RiEtC3DbsDieW40OsY6FiTxv0tnDB0jLdIrUiwa6xKQ; cu_form_jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InNiVkFxWkNGdVJBPSJ9.eyJ1c2VyIjoxMzgxNDQ5ODEsInZhbGlkYXRlZCI6dHJ1ZSwid3Nfa2V5IjoiMTg3MzM0MTQzOCIsImZvcm0iOnRydWUsInNlc3Npb25fdG9rZW4iOnRydWUsImlhdCI6MTc0NzE2NDA1NCwiZXhwIjoxNzQ3MzM2ODU0fQ.eI-ZnaBqfF1Vwugsvww31z1wW1i4TOlDZ6QUByW_aK8; cu_attachment_jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InNiVkFxWkNGdVJBPSJ9.eyJ1c2VyIjoxMzgxNDQ5ODEsInZhbGlkYXRlZCI6dHJ1ZSwid3Nfa2V5IjoiMTg3MzM0MTQzOCIsImF0dGFjaG1lbnQiOnRydWUsInNlc3Npb25fdG9rZW4iOnRydWUsImlhdCI6MTc0NzE2NDA1NCwiZXhwIjoxNzQ3MzM2ODU0fQ.ceOZlYRdRplNcd3LS1LzYv3e4eyogWLB3mTLjzaMbTQ; _ga_CMNNJGSJVV=GS2.1.s1747162986$o21$g1$t1747164072$j38$l0$h0; analytics_session_id.last_access=1747164073124`,
      Origin: 'https://app.clickup.com'
    },
  });

  if (!response.ok) {
    throw new Error('No se pudo refrescar el token');
  }

  const data = await response.json();
  return data.token;
}


export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método no permitido' });
  }

  const { contenido } = req.body;

  try {
    const accessToken = await refreshClickUpToken(); // ← Obtener token actualizado

    const respuesta = await fetch('https://frontdoor-prod-us-east-2-1.clickup.com/tasks/v1/subcategory/901311341091/task', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}` // ← Usar el token fresco aquí
      },
      body: JSON.stringify({ name: contenido })
    });

    const data = await respuesta.json();
    return res.status(200).json(data);

  } catch (error) {
    console.error('Error al crear tarea:', error);
    return res.status(500).json({ message: 'Error al enviar la solicitud' });
  }
}
