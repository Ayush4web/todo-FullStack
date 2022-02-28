import React from 'react'
import { FaSearch, FaEdit, FaTrash } from 'react-icons/fa'

export const Task = () => {
  return (
    <section>
      <div className='container'>
        <div className='row '>
          <div className='col-lg-6 mx-auto'>
            <div className='card mt-max py-2'>
              <div className='card-title'>
                <h1 className='text-center text-info mb-1'>Todo List</h1>
                <div className='underline mx-auto'></div>
              </div>
              <div className='card-body'>
                <form>
                  <div className='input-group'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Eg. Walk The Dog'
                    />
                    <div className='input-group-append'>
                      <div className='input-group-text'>
                        <button className='btn'>
                          <FaSearch className='text-warning size' />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className='mt-lg'>
              <div className='card h-s mt-4'>
                <div className='card-body d-flex justify-content-between'>
                  <h5 className='mb-0 d-flex align-items-center'>
                    Walk The Dog
                  </h5>
                  <div className='btn-group'>
                    <button className='btn '>
                      <FaEdit className='text-success size' />
                    </button>
                    <button className=' btn'>
                      <FaTrash className='text-danger size' />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
