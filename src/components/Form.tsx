'use client';

import * as Form from '@radix-ui/react-form';

import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

export function FormComponent() {
    return (
        <div className="p-4 m-auto flex flex-col items-center justify-center gap-4">
            <Form.Root className="w-full   ">
        <Form.Field className="grid mb-2" name="email">
          <div className='flex items-baseline justify-between'>
            <Form.Label className="font-medium">Email</Form.Label>
            <Form.Message className="text-sm opacity-60 " match="valueMissing">
              Please enter your email
            </Form.Message>
            <Form.Message className="text-sm text-white opacity-60" match="typeMismatch">
              Please provide a valid email
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input className="bg-[var(--mysterySpace)] px-2 border-2 border-[var(--SlightlyShade)] hover:opacity-80 rounded-lg focus:outline-none" type="email" required  />
          </Form.Control>
        </Form.Field>
        <Form.Field className="grid mb-2" name="question">
          <div  className='flex items-baseline justify-between'>
            <Form.Label className="font-medium" >Name</Form.Label>
            <Form.Message className="text-sm opacity-60 " match="valueMissing">
              Please enter a name
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input className=" inline-flex px-2 w-full  items-center bg-[var(--mysterySpace)] justify-center  border-2 border-[var(--SlightlyShade)] rounded-lg focus:shadow-inner shadow-md focus:border-[var(--PureColor)] focus:outline-none resize-none hover:opacity-80" required />
          </Form.Control>
        </Form.Field>
        <Form.Submit asChild >
          <button className="p-2 border border-[var(--CoolColor)] rounded-xl hover:opacity-80 my-4" >
                        <Link href="/loading">
                            Post question
                        </Link>
          </button>
                </Form.Submit>

                <div className='flex items-center w-full justify-between'>
      <Checkbox.Root className="bg-[var(--Gray)] w-6 h-6 flex items-center rounded-md justify-center hover:opacity-60 focus:border-black focus:border " defaultChecked id="c1">
        <Checkbox.Indicator className="text-[var(--PureColor)]">
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <label className="text-[var(--Gray)] text-base" htmlFor="c1">
        Accept terms and conditions.
      </label>
    </div>

      </Form.Root>
        </div>
    
    )
}