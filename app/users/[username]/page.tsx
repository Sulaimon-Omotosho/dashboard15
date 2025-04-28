import AppLineChart from '@/components/AppLineChart'
import CardList from '@/components/CardList'
import EditUser from '@/components/EditUser'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import { Progress } from '@/components/ui/progress'
import { Sheet, SheetTrigger } from '@/components/ui/sheet'
import { BadgeCheck, Candy, Citrus, Shield } from 'lucide-react'
import React from 'react'

const SingleUserPage = () => {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href='/'>Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href='/users'>Users</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Uncle Sula</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* CONTAINER  */}
      <div className='mt-4 flex flex-col xl:flex-row gap-8'>
        {/* LEFT */}
        <div className='w-full xl:w-1/3 space-y-6'>
          {/* USER BADGE CONTAINER  */}
          <div className='bg-primary-foreground p-4 rounded-lg'>
            <h1 className='text-xl font-semibold'>User Badges</h1>
            <div className='flex gap-4 mt-4'>
              <HoverCard>
                <HoverCardTrigger>
                  <BadgeCheck
                    size={36}
                    className='rounded-full bg-blue-500/30 border-1 border-blue-500/50 p-2'
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className='font-bold mb-2'>Verified User</h1>
                  <p className='text-sm text-muted-foreground'>
                    User has been verified
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Shield
                    size={36}
                    className='rounded-full bg-green-800/30 border-1 border-green-800/50 p-2'
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className='font-bold mb-2'>Admin</h1>
                  <p className='text-sm text-muted-foreground'>
                    Admin users have access to all features and can manage
                    users.
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Candy
                    size={36}
                    className='rounded-full bg-yellow-500/30 border-1 border-yellow-500/50 p-2'
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className='font-bold mb-2'>Awarded</h1>
                  <p className='text-sm text-muted-foreground'>
                    This user has been awarded for their contributions.
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Citrus
                    size={36}
                    className='rounded-full bg-orange-500/30 border-1 border-orange-500/50 p-2'
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className='font-bold mb-2'>Popular</h1>
                  <p className='text-sm text-muted-foreground'>
                    This user has been popular in the community.
                  </p>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
          {/* INFORMATION CONTAINER  */}
          <div className='bg-primary-foreground p-4 rounded-lg'>
            <div className='flex items-center justify-between'>
              <h1 className='text-xl font-semibold'>User Information</h1>
              <Sheet>
                <SheetTrigger asChild>
                  <Button>Edit User</Button>
                </SheetTrigger>
                <EditUser />
              </Sheet>
            </div>
            <div className='space-y-4 mt-4'>
              <div className='flex flex-col gap-2 mb-8'>
                <p className='text-sm text-muted-foreground'>
                  Profile Completion
                </p>
                <Progress value={73} />
              </div>
              <div className='flex items-center gap-2'>
                <h3 className='font-bold'>Username:</h3>
                <p className=''>Uncle-Sula</p>
              </div>
              <div className='flex items-center gap-2'>
                <h3 className='font-bold'>Email:</h3>
                <p className=''>Uncle.Sula@gmail.com</p>
              </div>
              <div className='flex items-center gap-2'>
                <h3 className='font-bold'>Phone:</h3>
                <p className=''>+234 902 345 6789</p>
              </div>
              <div className='flex items-center gap-2'>
                <h3 className='font-bold'>Location:</h3>
                <p className=''>Lagos, Nigeria</p>
              </div>
              <div className='flex items-center gap-2'>
                <h3 className='font-bold'>Role:</h3>
                <Badge>Admin</Badge>
              </div>
            </div>
            <p className='text-sm text-muted-foreground mt-4'>
              Started on 28.04.2025
            </p>
          </div>
          {/* CARD LIST CONTAINER  */}
          <div className='bg-primary-foreground p-4 rounded-lg'>
            <CardList title='Recent Transactions' />
          </div>
        </div>
        {/* RIGHT */}
        <div className='w-full xl:w-2/3 space-y-6'>
          {/* USER CARD CONTAINER  */}
          <div className='bg-primary-foreground p-4 rounded-lg space-y-2'>
            <div className=''>
              <Avatar className='size-12'>
                <AvatarImage src='https://avatars.githubusercontent.com/u/35189684?v=4' />
                <AvatarFallback>US</AvatarFallback>
              </Avatar>
              <h1 className='text-xl font-semibold'>Uncle Sula</h1>
            </div>
            <p className='text-sm text-muted-foreground'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
              ipsa error, aspernatur temporibus veniam itaque sapiente tenetur
              illum enim ex dicta expedita, porro assumenda sint!
            </p>
          </div>

          {/* CHART CONTAINER  */}
          <div className='bg-primary-foreground p-4 rounded-lg'>
            <h1 className='text-xl font-semibold'>User Activity</h1>
            <AppLineChart />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleUserPage
