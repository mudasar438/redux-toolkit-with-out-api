import React from 'react'
import { useState } from 'react';

export const FirstItem = () => {
    const [state, setState] = useState([
        {id: 1, name: 'Alice'},
        {id: 2, name: 'Bob'},
      ]);
      const first = state[0];
      return (
        <div>
          <h2>id: {first?.id}</h2>
          <h2>name: {first?.name}</h2>
        </div>
      );
}
