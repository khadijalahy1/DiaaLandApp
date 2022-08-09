export const addOffer=offer=>(
    {
        type:'ADD_OFFER',
        payload:offer,

    }
);

export const removeOffer=idOffer=>(
    {
        type:'REMOVE_OFFER',
        payload:idOffer,

    }
);