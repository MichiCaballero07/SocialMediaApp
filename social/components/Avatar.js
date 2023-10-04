export default function Avatar({size}) {
  let width = 'w-12';
  if (size === 'lg'){
    width = 'w-24 md:w-36';
  }
    return (
        <div className={`${width} rounded-full overflow-hidden`}>
            <img
              src="https://images.unsplash.com/photo-1579503841516-e0bd7fca5faa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80"
              alt=""
            />
          </div>
    )
}


