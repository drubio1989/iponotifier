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
            <span className='leading-tight w-full text-red-500' >
              {errors.email.message}
            </span>
          )}
          <div className="flex items-center border-b border-teal-500 py-2">
            <input data-lpignore="true"
              className="
                w-full 
                text-gray-700 
                mr-3 
                py-1 
                px-2 
                leading-tight
                rounded-md
                transition
                disabled:opacity-70
                disabled:cursor-not-allowed
                border-neutral-300
                focus:border-teal-500
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
        </div>
      </form>
    </div>
  )
}

export default SubscribeForm