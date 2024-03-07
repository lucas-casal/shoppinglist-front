import { useContext, useRef, useState } from 'react';
import { MouseEvent } from 'react';

import { assertIsNode } from '../Modal/assertIsNode';
import { ModalContext, TypesOfModal } from '@/app/contexts/ModalContext';
import EditProfile from '../ModalLayouts/EditProfile';
import AddShoppingList from '../ModalLayouts/AddShoppingList';
import RelatedUserOptions from '../ModalLayouts/RelatedUserOptions';


export default function CreatePostModal() {
  const ref = useRef<HTMLDivElement>(null);
  const {setPostModalOpen, typeOfModal} = ModalContext();

  function handleClickOutsideModal(e: MouseEvent) {
    assertIsNode(e.target);

    if (ref.current && !ref.current.contains(e.target)) {
      closeModal(null);
    }
  }
  function closeModal(e: MouseEvent | null) {
    e?.preventDefault();
    setPostModalOpen(false);
  }

  

  return (
    <div onClick={(e) => {handleClickOutsideModal(e)}} id="authentication-modal" aria-hidden="true" className="bg-black bg-opacity-80 flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full h-full">
    <div ref={ref} className="relative p-4 w-full min-w-20 min-h-72 overflow-y-scroll bg-blue-500 dark:bg-violet-700 max-w-md rounded-3xl max-h-full">
       {typeOfModal === TypesOfModal.EDIT_PROFILE ? <EditProfile /> : ''}
       {typeOfModal === TypesOfModal.ADD_SHOPPINGLIST ? <AddShoppingList /> : ''}
       {typeOfModal === TypesOfModal.EDIT_RELATED_USER ? <RelatedUserOptions /> : ''}
    </div>
</div> 
  );
}