import { useState } from 'react';
import supabase from '../db/supabaseClient';

export default function MailingList() {
  const [email, setEmail] = useState('');

  async function createEmail() {
    await supabase
      .from('coming')
      .insert([
        { email: email }
    ]);

    setEmail(email)
  }

  return(
    <>
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <button onClick={createEmail}>送出</button>
    </>
  )
}
