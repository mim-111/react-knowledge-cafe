/* eslint-disable no-undef */

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    // eslint-disable-next-line no-undef
    useEffect( () => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))

    }, [])
    return (
        <div className="md: w-2/3">

            <h1 className='text-4xl font-bold'>Blogs: {blogs.length}</h1>
        </div>
    );

};

export default Blogs;