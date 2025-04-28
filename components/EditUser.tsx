'use client'

import React from 'react'
import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from './ui/sheet'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const formSchema = z.object({
  username: z
    .string()
    .min(5, { message: 'Username must be more than 5 characters' })
    .max(50),
  email: z.string().email({ message: 'Must be an email' }),
  phone: z.string().min(10).max(15),
  location: z.string().min(12),
  role: z.enum(['admin', 'user']),
})

const EditUser = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: 'Uncle-Sula',
      email: 'uncle.sula@gmail.com',
      phone: '+234 902 345 6789',
      location: 'Lagos, Nigeria',
      role: 'admin',
    },
  })
  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle className='mb-4'>Edit User</SheetTitle>
        <SheetDescription>
          This action cannot be undone. This will permanently delete your
          account and remove your data from our servers.
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  )
}

export default EditUser
