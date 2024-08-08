import './category.css'
import { Link } from 'react-router-dom';
const categoriasImg = [
    {
        name: 'MATES',
        url: 'https://firebasestorage.googleapis.com/v0/b/mateardi-d8f70.appspot.com/o/categorias%2Ffce8644f-12a6-47df-86c1-ee3fedd20071.jpg?alt=media&token=259e3bc5-b09a-4173-b911-4bbe044e1319',
        to: 'categoria/mates'
    },
    {
        name: 'BOMBILLAS',
        url: 'https://firebasestorage.googleapis.com/v0/b/mateardi-d8f70.appspot.com/o/categorias%2Fee3d328b-798a-4445-88ff-d39402c7af50.jpg?alt=media&token=9f3ca652-4eb3-4101-bbab-17bad938d6ac',
        to: 'categoria/bombillas'
    },
    {
        name: 'YERBAS',
        url: 'https://firebasestorage.googleapis.com/v0/b/mateardi-d8f70.appspot.com/o/categorias%2F322efe7540bcca8465816c1203740ec4.jpg?alt=media&token=b8390b0a-c844-4bae-a4b6-b35e1b3faa4a',
        to: 'categoria/yerbas'
    },
    {
        name: 'MATERAS',
        url: 'https://firebasestorage.googleapis.com/v0/b/mateardi-d8f70.appspot.com/o/categorias%2FMateras.png?alt=media&token=b0bb8ab6-6f0b-4f51-bb50-48906cdd7a5a',
        to: 'categoria/materas'
    },{
        name: 'TERMOS',
        url: 'https://firebasestorage.googleapis.com/v0/b/mateardi-d8f70.appspot.com/o/categorias%2FTERMOS.png?alt=media&token=4a3432bb-e26e-4212-acc8-8933d1e1d532',
        to: 'categoria/termos'
    }

]
export const Categorias = () => {
    return (
        <>
            <div className="categoriasContiner">
                {categoriasImg.map(category => {
                    return (
                        <Link className='category' to={category.to}>
                            <img src={category.url} alt={category.name} className="categoryImg">
                            </img>
                        </Link>
                    )
                })}
            </div>
        </>
    )
}
