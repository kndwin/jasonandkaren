import { useState } from 'react'
import Head from 'next/head'
import { useForm } from 'react-hook-form'

type Inputs = {
  example: string,
  exampleRequired: string
}

export default function RSVP() {
  const { register, handleSubmit, watch, errors } = useForm<Inputs>()
  const [form, setForm] = useState()
  const onSubmit = data => setForm(data.toString())

  return (
    <>
      <Head>
        <title>RSVP</title>
      </Head>
      <body>
        <h1>RSVP</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input name="example" defaultValue="test" ref={register}/>
          <input name="exampleRequired" ref={register({ required: true })} />
          {errors.exampleRequired && <span>this field is required</span> }
          <input type="submit" />
        </form>
        <div>{form}</div>
      </body>
    </>
  )
}
