import Link from "next/link";

export const revalidate = 30;


export default async function Home() {
  
    const backgroundImage = 'url(\'beautiful-shot-forest-with-tall-green-trees.jpg\')'

  return (
    // <div className="grid grid-cols-1 md:grid-cols-2  mt-5 gap-5">

    <div className="bg-cover min-h-screen bg-center w-full h-full" style={{backgroundImage: backgroundImage }}>
      <div className="min-h-screen bg-cover bg-center flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">As simple as it seems...</h1>
            <p className="text-lg mb-6">We used slick technology to built this website 😍</p>
            <div className=" flex gap-2 justify-center align-middle">
              <Link href="/blog" className="bg-blue-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">View Blog</Link>
              <Link href="#" className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">View Store</Link>
            </div>
          </div>
      </div>
    </div>
        
    // </div>
  );
}
