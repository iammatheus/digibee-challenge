import { InputForm } from '@/components/Form/InputForm'
import { TextAreaForm } from '@/components/Form/TextAreaForm'
import { Select, SelectItem } from '@heroui/react'
import { Control, Controller } from 'react-hook-form'

type Props = {
  control: Control<any>
}

export function OrganizeTestSection({ control }: Props) {
  return (
    <div className="mb-8 flex flex-col gap-4">
      <header className="flex items-center justify-between gap-2">
        <h3 className="text-xs font-semibold text-gray-900">
          ORGANIZE YOUR TESTS
        </h3>
      </header>

      <div className="overflow-hidden rounded-lg border border-gray-50">
        <div className="rounded-t-lg border border-b-1 p-0 transition hover:border-gray-900">
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <InputForm
                placeholder="Enter the name of the test"
                label="Name"
                radius="none"
                errorMessage="Name is required"
                isRequired
                className="rounded-none outline-1"
                {...field}
              />
            )}
          />
        </div>

        <div className="border border-t-gray-50 p-0 transition hover:border-gray-900">
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <TextAreaForm
                placeholder="Add information about the test"
                isRequired
                label="Description"
                errorMessage="Description is required"
                radius="none"
                {...field}
              />
            )}
          />
        </div>

        <div className="rounded-b-lg border border-t-gray-50 p-0 transition hover:border-gray-900">
          <Controller
            name="group"
            control={control}
            render={({ field }) => (
              <Select label="Add your test to a group" {...field}>
                <SelectItem key="group1">Group 1</SelectItem>
              </Select>
            )}
          />
        </div>
      </div>
    </div>
  )
}
