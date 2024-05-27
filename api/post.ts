import type { VercelRequest, VercelResponse } from '@vercel/node'

import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient(
  'https://bpvhavaiqyfnanftabwk.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJwdmhhdmFpcXlmbmFuZnRhYndrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY4MzY4MzIsImV4cCI6MjAzMjQxMjgzMn0.7MroO2Lis3jncbMJ6W188aFWkiAzlIjsfHq1Qo7ecaY',
)

export default async function handler(req: VercelRequest, res: VercelResponse) {
  let { body } = req

  console.log('Body: ', body.max)

  const { data, error } = await supabase
    .from('t')
    .update({ max: body.max })
    .eq('id', 1)
    .select()

  //@ts-ignore
  return res.json(body)
}
