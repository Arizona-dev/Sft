/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export interface modalProps {
  val: any,
  open: boolean,
  onChange: any
}

export default function Modal(props: modalProps) {
  const cancelButtonRef = useRef(null);

  function handleChange(event: any) {
    props.onChange(event);
  }

  return (
    <Transition.Root show={props.open} as={Fragment}>
      <Dialog as="div" className="fixed z-60 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={handleChange}>
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-50 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            {props.val && (
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg lg:max-w-2xl sm:w-full">
                <div className="flex text-center bg-gray-50 py-3 sm:px-6">
                  <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                    {props.val.data.symbol} #{props.val.data.edition}
                  </Dialog.Title>
                </div>
                <div className="bg-white px-4 pb-4">
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      {props.val.data.description}
                    </p>
                  </div>
                  <div className="sm:flex sm:items-start mt-4">
                    <div className="mx-auto flex-shrink-0 flex items-center justify-center rounded-full sm:mx-0 sm:h-50 sm:w-50">
                      <img
                        src={props.val.data.image}
                        alt="val.data.name"
                        width="250"
                        className="rounded-lg"
                      />
                    </div>
                    <div className="mx-auto items-center justify-center">
                      <table className="table-auto text-sm font-light border w-1/2">
                        <thead>
                          <tr className="border">
                            <th>Attributes</th>
                            <th>Value</th>
                          </tr>
                        </thead>
                        <tbody>
                          {props.val.data.attributes.length && props.val.data.attributes.map((val: any, ind: any) => {
                            return (
                              <tr key={ind}>
                                <td>{val.trait_type}</td>
                                <td>{val.value}</td>
                              </tr>
                              )
                            })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-500 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => handleChange(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
