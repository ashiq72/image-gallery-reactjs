"use client";
import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import { Photo } from "./Photo";

export const SortablePhoto = (props) => {
  const sortable = useSortable({ id: props.url });
  const { listeners, setNodeRef, transform, transition, setActivatorNodeRef } =
    sortable;

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <Photo
      ref={setNodeRef}
      style={style}
      {...props}
      {...listeners}
      setActivatorNodeRef={setActivatorNodeRef}
    />
  );
};
