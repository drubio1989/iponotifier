'use client'

import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const SubscribeForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.post(`${process.env.IPO_CALENDAR_URL}/ipo-calendar`, Object.assign(data, { operation: 'subscribe'}))
      toast.success('Thank you for subscribing!')
    } catch(error) {
      toast.error('Something went wrong')
    }
  }

  return (
    <div>
      <form className="w-full max-w-sm" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center border-b border-teal-500 py-2">
          <input data-lpignore="true"
            className="
              appearance-none 
              bg-transparent 
              border-none 
              w-full 
              text-gray-700 
              mr-3 
              py-1 
              px-2 
              leading-tight 
              focus:outline-none
            " 
            {...register('email', { 
              required: "Email is required", 
              pattern: {
                value: /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/,
                message: 'Invalid email address',
              }    
            })}
            aria-invalid={errors.email ? "true" : "false"}
          />
          {errors.email && <span className='leading-tight w-full text-red-500' >{errors.email.message}</span>}

          <input 
            className="
              flex-shrink-0 
              bg-teal-500 
              hover:bg-teal-700 
              border-teal-500 
              hover:border-teal-700 
              text-sm border-4 
              text-white 
              py-1 
              px-2 
              rounded ml-auto
            " 
            type='submit'
          />
        </div>
      </form>
    </div>
  )
}

export default SubscribeForm