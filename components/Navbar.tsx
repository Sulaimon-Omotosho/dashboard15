'use client'

import { LogOut, Moon, MoonIcon, Settings, Sun, User } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useTheme } from 'next-themes'
import { Button } from './ui/button'
import { SidebarTrigger } from './ui/sidebar'

const Navbar = () => {
  const { theme, setTheme } = useTheme()

  return (
    <nav className='flex justify-between p-4 items-center'>
      {/* LEFT  */}
      <SidebarTrigger className='cursor-pointer' />
      {/* RIGHT  */}
      <div className='flex items-center gap-4 w-full]'>
        <Link href='/'>Dashboard</Link>

        {/* THEME MENU  */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='outline' size='icon' className='cursor-pointer'>
              <Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
              <Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
              <span className='sr-only'>Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuItem
              onClick={() => setTheme('light')}
              className='cursor-pointer'
            >
              Light
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => setTheme('dark')}
              className='cursor-pointer'
            >
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => setTheme('system')}
              className='cursor-pointer'
            >
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* MENU  */}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage
                src='https://github.com/shadcn.png'
                className='cursor-pointer'
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent sideOffset={10} className='cursor-default'>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className='cursor-pointer'>
              <User className='h-4 w-4 mr-2 cursor-pointer' /> Profile
            </DropdownMenuItem>
            <DropdownMenuItem className='cursor-pointer'>
              <Settings className='h-4 w-4 mr-2 cursor-pointer' /> Settings
            </DropdownMenuItem>
            <DropdownMenuItem variant='destructive' className='cursor-pointer'>
              <LogOut className='h-4 w-4 mr-2 cursor-pointer' /> Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  )
}

export default Navbar
