'use client'

import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { postSubscribeEmail } from "../actions";

const SubscribeForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const result = await postSubscribeEmail(data);
      
      if (result.statusCode === 409) {
        toast.success('This email is already subscribed!')
        return;
      }

      if (result.statusCode === 201) {
        toast.success('Thank you for subscribing!')
        return;
      }
     
    } catch (error) {
      toast.error('Something went wrong')
    } finally {
      reset();
    }
  };

  return (
    <div>
      <form className="w-max" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center flex-col">
          {errors.email && (
            <span className='font-mono leading-tight w-full text-red-500 mb-2' >
              {errors.email.message}
            </span>
          )}
          <div className="w-full">
            <div className={(`border border-teal-400 rounded py-5 px-4`)}>
              <h4 className={(`font-mono text-sm uppercase text-gray-500 mb-3`)}>Subscribe to the newsletter</h4>
              <input data-lpignore="true"
                className="rounded-md border border-gray-300 bg-gray-100 min-w-0 rounded text-gray-800 py-2 px-3 mr-2"
                placeholder="Enter your email"
                {...register('email', { 
                  required: "Email is required", 
                  pattern: {
                    value: /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/,
                    message: 'Invalid email address',
                  }    
                })}
                aria-invalid={errors.email ? "true" : "false"}
              />
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
                value='Subscribe'
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SubscribeForm