import { FC } from "react";
import { useTheme } from "next-themes";

const About: FC = () =>
{

  const { theme, setTheme } = useTheme()

  return (
    <>
      <div
        className="container"
      >
        {/*<div*/ }
        {/*  className="grid grid-cols-4 grid-rows-2 gap-2"*/ }
        {/*>*/ }
        {/*  <div className="col-span-2 col-start-2 bg-blue-200">A</div>*/ }
        {/*  <div className="col-start-1 row-span-2 bg-blue-300">B</div>*/ }
        {/*  <div className="bg-blue-400">C</div>*/ }
        {/*  <div className="bg-blue-500">D</div>*/ }
        {/*  <div className="bg-blue-600">E</div>*/ }
        {/*  <div className="bg-blue-700">F</div>*/ }
        {/*</div>*/ }

        {/*<div className="grid grid-flow-col grid-cols-4 grid-rows-3">*/ }
        {/*  <div className="bg-blue-100">1</div>*/ }
        {/*  <div className="bg-blue-200">2</div>*/ }
        {/*  <div className="bg-blue-300">3</div>*/ }
        {/*  <div className="bg-blue-400">4</div>*/ }
        {/*  <div className="bg-blue-500">5</div>*/ }
        {/*  <div className="bg-blue-600">6</div>*/ }
        {/*  <div className="bg-blue-700">7</div>*/ }
        {/*  <div className="bg-blue-800">8</div>*/ }
        {/*  <div className="bg-blue-900">9</div>*/ }
        {/*</div>*/ }

        {/*<div className="py-12 containermx-auto">*/ }
        {/*  <div className="grid grid-cols-3 gap-6">*/ }
        {/*    <div className="col-span-2">*/ }
        {/*      <iframe*/ }
        {/*        className="aspect-video w-full"*/ }
        {/*        src="https://www.youtube.com/embed/r1ySsbIA7EU"*/ }
        {/*        title="YouTube video player"*/ }
        {/*        frameBorder="0"*/ }
        {/*        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"*/ }
        {/*        allowFullScreen*/ }
        {/*      ></iframe>*/ }
        {/*    </div>*/ }
        {/*    <div className="col-span-1 bg-blue-200">*/ }
        {/*    </div>*/ }
        {/*  </div>*/ }
        {/*</div>*/ }

        {/*<div className="container mx-auto py-12">*/ }
        {/*  <div className="columns-4 gap-6">*/ }
        {/*<img src="https://cdn.pixabay.com/photo/2013/08/29/02/48/sunset-176939_960_720.jpg" alt=""/>*/ }
        {/*<img src="https://cdn.pixabay.com/photo/2022/08/24/11/10/autumn-7407475_960_720.jpg" alt=""/>*/ }
        {/*<img src="https://cdn.pixabay.com/photo/2022/09/09/15/16/monastery-7443192_960_720.jpg" alt=""/>*/ }
        {/*<img src="https://cdn.pixabay.com/photo/2022/09/11/15/56/river-7447346_960_720.jpg" alt=""/>*/ }
        {/*<img src="https://cdn.pixabay.com/photo/2022/09/05/10/36/grey-seal-7433843_960_720.jpg" alt=""/>*/ }
        {/*<img src="https://cdn.pixabay.com/photo/2022/08/13/08/33/forest-7383165_960_720.jpg" alt=""/>*/ }
        {/*</div>*/ }
        {/*</div>*/ }

        {/*<div className="container mx-auto py-12">*/ }
        {/*  <div className="columns-2">*/ }
        {/*    <p className="bg-red-200">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in aliquam diam. Aenean efficitur purus a risus varius, id feugiat nulla luctus. Quisque et ultricies mauris. Donec commodo tortor quis erat mollis ultricies. Praesent vulputate risus ut neque fringilla, eu tempor enim imperdiet. Praesent aliquam, lectus at congue dictum, tellus lacus accumsan magna, et eleifend tortor purus id lacus. Nullam tristique ligula et justo tincidunt vestibulum. In hac habitasse platea dictumst. Duis ultrices nec tellus nec dapibus. </p>*/ }
        {/*    <p className="bg-blue-200">Ut a magna non nulla pellentesque placerat ac quis nulla. Maecenas consectetur ut ante at tincidunt. Nullam vehicula id lorem at scelerisque. Nullam massa sapien, aliquam non lacinia et, dictum eget diam. Nulla pharetra, odio id venenatis scelerisque, sapien odio ultricies risus, eu consequat nunc metus ac diam. Etiam nisi diam, mattis ut ex ornare, facilisis iaculis neque. Maecenas dignissim augue eleifend quam porttitor lacinia. Phasellus scelerisque, arcu eget gravida mattis, felis felis aliquam ante, id mattis massa massa at tortor. Morbi commodo, velit vitae tincidunt tristique, velit augue viverra purus, a malesuada dolor magna ac lacus. Vivamus a dui nulla. Morbi varius quam tortor. Nullam imperdiet diam et vehicula luctus. </p>*/ }
        {/*    <p className="break-inside-avoid-column bg-green-200">Mauris lobortis, dui malesuada elementum porta, metus eros porttitor odio, nec convallis diam urna a mi. Nullam a rhoncus lorem. Vivamus ut mattis lectus. Praesent metus nibh, placerat id dignissim vitae, tempus commodo tellus. Etiam nunc lacus, tempor eget ipsum ut, vulputate iaculis sem. Proin volutpat, ipsum sit amet commodo malesuada, turpis est malesuada libero, quis convallis metus ante ut leo. Suspendisse est elit, blandit a mattis sed, ultricies sit amet neque. Nunc mollis elit tincidunt, eleifend erat a, facilisis nulla. Integer euismod sollicitudin ex, vitae sollicitudin ipsum rhoncus sit amet. Maecenas id libero eget dolor facilisis convallis. Duis eget varius nunc, sit amet tincidunt mi. Mauris non vehicula justo. Etiam tempor diam ut arcu aliquet venenatis. Vivamus pellentesque viverra urna, id vehicula ligula lacinia a. Fusce tristique purus sed quam consequat, non placerat tortor rhoncus. Suspendisse dui odio, faucibus id nibh sed, vehicula luctus lectus. </p>*/ }
        {/*    <p className="bg-indigo-200">Morbi aliquam fringilla justo quis dapibus. Pellentesque ut ipsum id ipsum rhoncus rhoncus. Ut mattis, metus nec rhoncus elementum, ligula lorem tempor elit, nec egestas enim eros nec lorem. Phasellus gravida tortor ut sapien iaculis hendrerit. In gravida mauris finibus euismod iaculis. Phasellus sagittis mi varius, finibus magna et, placerat orci. Sed vehicula eros aliquet, pulvinar nulla vel, sollicitudin felis. Nunc vitae blandit nisl, id consectetur ex. Curabitur accumsan magna quis augue aliquam, quis vulputate sapien hendrerit. Sed tempus rutrum metus, id aliquet elit sagittis non. Fusce euismod gravida felis, sit amet sodales felis malesuada non. Nullam facilisis justo quis dignissim gravida. Vivamus leo nulla, posuere sed turpis id, facilisis efficitur purus. Ut semper venenatis lorem ac consectetur. Nam aliquam ipsum in libero vulputate tempor. Mauris sodales est tellus, non blandit metus vulputate id. </p>*/ }
        {/*    <p className="bg-yellow-200">Sed sapien nisi, venenatis elementum libero at, congue vehicula felis. Nullam tempor ultricies quam ac volutpat. Integer id scelerisque sem. Sed tortor turpis, iaculis ac pellentesque quis, hendrerit ac urna. Aliquam sollicitudin neque ac orci cursus, pharetra condimentum erat pharetra. Nullam mattis nulla dolor, in laoreet odio ultrices hendrerit. Cras gravida a lectus sed sollicitudin. Donec nec elit nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed condimentum tincidunt lorem nec blandit. Mauris sit amet massa purus. Nunc sagittis dolor vitae turpis commodo dictum. Vivamus sit amet lobortis eros. Etiam ornare posuere lorem at volutpat. Praesent consequat tortor at orci laoreet, eget mollis dui laoreet. Nulla ac ante mi. </p>*/ }
        {/*  </div>*/ }
        {/*</div>*/ }

        {/*<div className="container mx-auto py-12">*/ }

        {/*  <div*/ }
        {/*    className="flex flex-col"*/ }
        {/*  >*/ }
        {/*    <div>1</div>*/ }
        {/*    <div>2</div>*/ }
        {/*    <div>3</div>*/ }
        {/*  </div>*/ }

        {/*  <p className="m-4 inline-block bg-red-200">bloque</p>*/ }
        {/*  <div className="bg-red-200">bloque</div>*/ }
        {/*  <blockquote className="bg-red-200">bloque</blockquote>*/ }

        {/*  <span className="block bg-blue-300">inline</span>*/ }
        {/*  <a className="block bg-blue-300">inline</a>*/ }
        {/*</div>*/ }

        <button
          onClick={ () => setTheme( theme === 'dark' ? 'light' : 'dark' ) }
        >
          toggle
        </button>

        {/*<div*/ }
        {/*  className="container"*/ }
        {/*>*/ }
        {/*  <h1 className="font-sans">Parmas velum, tanquam nobilis abactor.</h1>*/ }
        {/*  <p className="font-bold">Animaliss observare, tanquam barbatus domina.Cum lactea messis, omnes amicitiaes examinare fortis, nobilis axonaes.Cur brodium experimentum?</p>*/ }
        {/*  <ul>*/ }
        {/*    <li className="text-sm">Quid est, quod non est?</li>*/ }
        {/*    <li className="text-sm">Quid est, quod non est?</li>*/ }
        {/*    <li className="text-sm">Quid est, quod non est?</li>*/ }
        {/*  </ul>*/ }
        {/*</div>*/ }

        {/*<div*/ }
        {/*  className="container"*/ }
        {/*>*/ }
        {/*  <h1 className="text-center text-3xl font-bold">Background</h1>*/ }
        {/*  <p>Omnias ortum in hamburgum!A falsis, silva lotus scutum.</p>*/ }
        {/*  <div*/ }
        {/*    // className="border-8 border-dashed border-blue-500 bg-cover bg-clip-content bg-no-repeat p-4"*/ }
        {/*    className="bg-fixed"*/ }
        {/*    style={{*/ }
        {/*      backgroundImage: `url(${"/715-536x354.jpg"})`,*/ }
        {/*      width: 500,*/ }
        {/*      height: 500,*/ }
        {/*    }}*/ }
        {/*  />*/ }
        {/*  <p>Regius abactus grauiter apertos acipenser est.Advena de flavum lura, visum abactor!Medicina de secundus quadra, convertam capio!</p>*/ }
        {/*  <p>Regius abactus grauiter apertos acipenser est.Advena de flavum lura, visum abactor!Medicina de secundus quadra, convertam capio!</p>*/ }
        {/*  <p>Regius abactus grauiter apertos acipenser est.Advena de flavum lura, visum abactor!Medicina de secundus quadra, convertam capio!</p>*/ }
        {/*  <p>Regius abactus grauiter apertos acipenser est.Advena de flavum lura, visum abactor!Medicina de secundus quadra, convertam capio!</p>*/ }
        {/*  <p>Regius abactus grauiter apertos acipenser est.Advena de flavum lura, visum abactor!Medicina de secundus quadra, convertam capio!</p>*/ }
        {/*  <p>Regius abactus grauiter apertos acipenser est.Advena de flavum lura, visum abactor!Medicina de secundus quadra, convertam capio!</p>*/ }
        {/*  <p>Regius abactus grauiter apertos acipenser est.Advena de flavum lura, visum abactor!Medicina de secundus quadra, convertam capio!</p>*/ }
        {/*  <p>Regius abactus grauiter apertos acipenser est.Advena de flavum lura, visum abactor!Medicina de secundus quadra, convertam capio!</p>*/ }
        {/*  <p>Regius abactus grauiter apertos acipenser est.Advena de flavum lura, visum abactor!Medicina de secundus quadra, convertam capio!</p>*/ }
        {/*  <p>Regius abactus grauiter apertos acipenser est.Advena de flavum lura, visum abactor!Medicina de secundus quadra, convertam capio!</p>*/ }
        {/*  <p>Regius abactus grauiter apertos acipenser est.Advena de flavum lura, visum abactor!Medicina de secundus quadra, convertam capio!</p>*/ }
        {/*  <p>Regius abactus grauiter apertos acipenser est.Advena de flavum lura, visum abactor!Medicina de secundus quadra, convertam capio!</p>*/ }
        {/*  <p>Regius abactus grauiter apertos acipenser est.Advena de flavum lura, visum abactor!Medicina de secundus quadra, convertam capio!</p>*/ }
        {/*  <p>Regius abactus grauiter apertos acipenser est.Advena de flavum lura, visum abactor!Medicina de secundus quadra, convertam capio!</p>*/ }
        {/*  <p>Regius abactus grauiter apertos acipenser est.Advena de flavum lura, visum abactor!Medicina de secundus quadra, convertam capio!</p>*/ }
        {/*  <p>Regius abactus grauiter apertos acipenser est.Advena de flavum lura, visum abactor!Medicina de secundus quadra, convertam capio!</p>*/ }
        {/*  <p>Regius abactus grauiter apertos acipenser est.Advena de flavum lura, visum abactor!Medicina de secundus quadra, convertam capio!</p>*/ }
        {/*  <p>Regius abactus grauiter apertos acipenser est.Advena de flavum lura, visum abactor!Medicina de secundus quadra, convertam capio!</p>*/ }
        {/*  <p>Regius abactus grauiter apertos acipenser est.Advena de flavum lura, visum abactor!Medicina de secundus quadra, convertam capio!</p>*/ }
        {/*  <p>Regius abactus grauiter apertos acipenser est.Advena de flavum lura, visum abactor!Medicina de secundus quadra, convertam capio!</p>*/ }
        {/*  <p>Regius abactus grauiter apertos acipenser est.Advena de flavum lura, visum abactor!Medicina de secundus quadra, convertam capio!</p>*/ }
        {/*  <p>Regius abactus grauiter apertos acipenser est.Advena de flavum lura, visum abactor!Medicina de secundus quadra, convertam capio!</p>*/ }

        {/*</div>*/ }

        {/*<div*/ }
        {/*  className="container"*/ }
        {/*>*/ }
        {/*  <div*/ }
        {/*    className="bg-gradient-to-r from-blue-400 via-green-300 to-blue-500 text-center text-5xl font-extrabold bg-clip-text text-transparent"*/ }
        {/*  >*/ }
        {/*    Hola*/ }
        {/*  </div>*/ }
        {/*</div>*/ }

        {/*<div*/ }
        {/*  className="container mx-auto pt-5"*/ }
        {/*>*/ }
        {/*  <div*/ }
        {/*    // className="w-64 h-64 bg-gray-600 border-l-8 border-blue-700*/ }
        {/*    // hover:border-blue-500"*/ }
        {/*    className="w-64 h-64 bg-gray-600 border-l-8 border-blue-700 hover:border-blue-500"*/ }
        {/*  >*/ }
        {/*  </div>*/ }

        {/*<p className="border-b border-gray-400">Alter victrixs ducunt ad elogium.Solems trabem in grandis tornacum!Bassus, salvus torquiss nunquam contactus de velox, clemens ignigena.</p>*/ }

        {/*  <div*/ }
        {/*    className="divide-y-8 divide-gray-600 divide-dashed"*/ }
        {/*  >*/ }
        {/*    <p>Alter victrixs ducunt ad elogium.Solems trabem in grandis tornacum!Bassus, salvus torquiss nunquam contactus de velox, clemens ignigena.</p>*/ }
        {/*    <p>Alter victrixs ducunt ad elogium.Solems trabem in grandis tornacum!Bassus, salvus torquiss nunquam contactus de velox, clemens ignigena.</p>*/ }
        {/*  </div>*/ }

        {/*  <nav*/ }
        {/*    className="divide-x-8 divide-blue-600"*/ }
        {/*  >*/ }
        {/*    <a href="">Link 1</a>*/ }
        {/*    <a href="">Link 2</a>*/ }
        {/*    <a href="">Link 3</a>*/ }
        {/*    <a href="">Link 4</a>*/ }
        {/*    <a href="">Link 5</a>*/ }
        {/*  </nav>*/ }
        {/*</div>*/ }
      </div>
      {/*<div*/ }
      {/*  className="container"*/ }
      {/*  className="overflow-x-auto"*/ }
      {/*>*/ }
      {/*  <table*/ }
      {/*    className="table table-zebra w-full"*/ }
      {/*  >*/ }
      {/*    <thead>*/ }
      {/*    <tr>*/ }
      {/*      <th>Pais</th>*/ }
      {/*      <th>Ciudad</th>*/ }
      {/*    </tr>*/ }
      {/*    </thead>*/ }
      {/*    <tbody>*/ }
      {/*    <tr>*/ }
      {/*      <td>Peru</td>*/ }
      {/*      <td>Lima</td>*/ }
      {/*    </tr>*/ }
      {/*    <tr>*/ }
      {/*      <td>Colombia</td>*/ }
      {/*      <td>Bogota</td>*/ }
      {/*    </tr>*/ }
      {/*    <tr>*/ }
      {/*      <td>España </td>*/ }
      {/*      <td>Madrid</td>*/ }
      {/*    </tr>*/ }
      {/*    </tbody>*/ }
      {/*  </table>*/ }
      {/*</div>*/ }

      {/*<div*/ }
      {/*  className="container mt-4 bg-blue-200"*/ }
      {/*>*/ }
      {/*<div*/ }
      {/*  className="bg-gray-300 w-64 h-32 p-8 border-8 border-gray-500 box-content"*/ }
      {/*>*/ }
      {/*  <div*/ }
      {/*    className="bg-gray-500 h-full w-full"*/ }
      {/*  >*/ }
      {/*  </div>*/ }
      {/*</div>*/ }
      {/*</div>*/ }

      {/*<div*/ }
      {/*  className="container mt-4 bg-blue-200"*/ }
      {/*>*/ }
      {/*  <div*/ }
      {/*    className="bg-gray-400 text-gray-700 text-center px-4 py-2 inline-block"*/ }
      {/*  >*/ }
      {/*    1*/ }
      {/*  </div>*/ }
      {/*  <div*/ }
      {/*    className="bg-gray-400 text-gray-700 text-center px-4 py-2 inline-block m-2"*/ }
      {/*  >*/ }
      {/*    2*/ }
      {/*  </div>*/ }
      {/*  <div*/ }
      {/*    className="bg-gray-400 text-gray-700 text-center px-4 py-2 inline-block"*/ }
      {/*  >*/ }
      {/*    3*/ }
      {/*  </div>*/ }
      {/*</div>*/ }

      {/*<div*/}
      {/*  className="container"*/}
      {/*>*/}
      {/*  <p className="mb-2 clear-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis voluptates ea facere! Necessitatibus porro deleniti doloribus soluta saepe provident, fugiat esse quisquam commodi sit similique, voluptate cupiditate, tempore nostrum dicta.</p>*/}
      {/*  <p className="mb-2">Iusto repudiandae asperiores aspernatur hic laboriosam adipisci accusamus, delectus sint repellat beatae? Vitae autem, omnis obcaecati ullam fugit eaque. Dolore ipsam dolorum quaerat quisquam ratione minus labore voluptatibus ducimus ex?</p>*/}
      {/*  <p className="mb-2">Dolore odio excepturi voluptatibus repellat commodi, harum asperiores ipsa omnis similique explicabo, alias qui eaque, quo ea ipsam iste animi dicta vitae minima quibusdam eius esse aut. Nulla, eligendi ea.</p>*/}
      {/*  <p className="mb-2">Fuga alias temporibus, ducimus dolorum nam debitis atque ipsum vero sapiente sint porro cumque, facilis quam autem reprehenderit! Numquam, quis fuga commodi aperiam rerum consequuntur distinctio deleniti sed quia exercitationem?</p>*/}
      {/*  <p className="mb-2">Blanditiis iusto vel ratione quaerat dolore corrupti autem voluptatem soluta tempore facere ex ad error magni aut non maiores libero corporis maxime doloremque, sed saepe perspiciatis consequatur! Molestias, doloribus facere?</p>*/}
      {/*</div>*/}

      {/*<div*/}
      {/*  className="container bg-gray-300"*/}
      {/*>*/}
      {/*  <img*/}
      {/*    className="w-full h-64 object-cover object-none"*/}
      {/*    src="https://cdn.pixabay.com/photo/2020/04/02/11/37/football-pitch-4994688__340.jpg"*/}
      {/*    alt="Imagen"*/}
      {/*  />*/}
      {/*</div>*/}

      {/*<div*/}
      {/*  className="container"*/}
      {/*>*/}
      {/*    <div*/}
      {/*      className="bg-gray-300 p-4 h-64 overflow-auto"*/}
      {/*    >*/}
      {/*      <p className="mb-2 clear-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis voluptates ea facere! Necessitatibus porro deleniti doloribus soluta saepe provident, fugiat esse quisquam commodi sit similique, voluptate cupiditate, tempore nostrum dicta.</p>*/}
      {/*      <p className="mb-2">Iusto repudiandae asperiores aspernatur hic laboriosam adipisci accusamus, delectus sint repellat beatae? Vitae autem, omnis obcaecati ullam fugit eaque. Dolore ipsam dolorum quaerat quisquam ratione minus labore voluptatibus ducimus ex?</p>*/}
      {/*      <p className="mb-2">Dolore odio excepturi voluptatibus repellat commodi, harum asperiores ipsa omnis similique explicabo, alias qui eaque, quo ea ipsam iste animi dicta vitae minima quibusdam eius esse aut. Nulla, eligendi ea.</p>*/}
      {/*      <p className="mb-2">Fuga alias temporibus, ducimus dolorum nam debitis atque ipsum vero sapiente sint porro cumque, facilis quam autem reprehenderit! Numquam, quis fuga commodi aperiam rerum consequuntur distinctio deleniti sed quia exercitationem?</p>*/}
      {/*      <p className="mb-2">Blanditiis iusto vel ratione quaerat dolore corrupti autem voluptatem soluta tempore facere ex ad error magni aut non maiores libero corporis maxime doloremque, sed saepe perspiciatis consequatur! Molestias, doloribus facere?</p>*/}
      {/*    </div>*/}
      {/*</div>*/}

      {/*<div className="container mt-4">*/}
      {/*  <div className="bg-gray-300 p-4 relative">*/}
      {/*    <div className="bg-gray-400 p-4">*/}
      {/*      <div className="bg-blue-400 p-4"></div>*/}
      {/*      <div className="bg-blue-500 p-4 absolute inset-x-0 top-0"></div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}

      {/*<div>*/}
        {/*<nav*/}
        {/*  className="bg-blue-300 h-16 fixed inset-x-0 z-50"*/}
        {/*>*/}
        {/*</nav>*/}

        {/*<aside*/}
        {/*  className="w-64 bg-gray-800 fixed inset-y-0"*/}
        {/*>*/}
        {/*</aside>*/}

        {/*<div*/}
        {/*  className="container pt-16"*/}
        {/*>*/}
        {/*  <p>Ubi est fatalis stella?Zirbuss sunt orexiss de talis adelphis.Omnias potus in nobilis piscinam!Nunquam transferre tata.Burguss accelerare, tanquam salvus planeta.Vae.A falsis, solem emeritis byssus.Heuretess trabem, tanquam dexter luna.Ecce, ferox lamia!Pol, neuter devirginato!</p>*/}
        {/*  <p>Ubi est fatalis stella?Zirbuss sunt orexiss de talis adelphis.Omnias potus in nobilis piscinam!Nunquam transferre tata.Burguss accelerare, tanquam salvus planeta.Vae.A falsis, solem emeritis byssus.Heuretess trabem, tanquam dexter luna.Ecce, ferox lamia!Pol, neuter devirginato!</p>*/}
        {/*  <p>Ubi est fatalis stella?Zirbuss sunt orexiss de talis adelphis.Omnias potus in nobilis piscinam!Nunquam transferre tata.Burguss accelerare, tanquam salvus planeta.Vae.A falsis, solem emeritis byssus.Heuretess trabem, tanquam dexter luna.Ecce, ferox lamia!Pol, neuter devirginato!</p>*/}
        {/*  <p>Ubi est fatalis stella?Zirbuss sunt orexiss de talis adelphis.Omnias potus in nobilis piscinam!Nunquam transferre tata.Burguss accelerare, tanquam salvus planeta.Vae.A falsis, solem emeritis byssus.Heuretess trabem, tanquam dexter luna.Ecce, ferox lamia!Pol, neuter devirginato!</p>*/}
        {/*  <p>Ubi est fatalis stella?Zirbuss sunt orexiss de talis adelphis.Omnias potus in nobilis piscinam!Nunquam transferre tata.Burguss accelerare, tanquam salvus planeta.Vae.A falsis, solem emeritis byssus.Heuretess trabem, tanquam dexter luna.Ecce, ferox lamia!Pol, neuter devirginato!</p>*/}
        {/*  <p>Ubi est fatalis stella?Zirbuss sunt orexiss de talis adelphis.Omnias potus in nobilis piscinam!Nunquam transferre tata.Burguss accelerare, tanquam salvus planeta.Vae.A falsis, solem emeritis byssus.Heuretess trabem, tanquam dexter luna.Ecce, ferox lamia!Pol, neuter devirginato!</p>*/}
        {/*  <p>Ubi est fatalis stella?Zirbuss sunt orexiss de talis adelphis.Omnias potus in nobilis piscinam!Nunquam transferre tata.Burguss accelerare, tanquam salvus planeta.Vae.A falsis, solem emeritis byssus.Heuretess trabem, tanquam dexter luna.Ecce, ferox lamia!Pol, neuter devirginato!</p>*/}
        {/*  <p>Ubi est fatalis stella?Zirbuss sunt orexiss de talis adelphis.Omnias potus in nobilis piscinam!Nunquam transferre tata.Burguss accelerare, tanquam salvus planeta.Vae.A falsis, solem emeritis byssus.Heuretess trabem, tanquam dexter luna.Ecce, ferox lamia!Pol, neuter devirginato!</p>*/}
        {/*  <p>Ubi est fatalis stella?Zirbuss sunt orexiss de talis adelphis.Omnias potus in nobilis piscinam!Nunquam transferre tata.Burguss accelerare, tanquam salvus planeta.Vae.A falsis, solem emeritis byssus.Heuretess trabem, tanquam dexter luna.Ecce, ferox lamia!Pol, neuter devirginato!</p>*/}
        {/*  <p>Ubi est fatalis stella?Zirbuss sunt orexiss de talis adelphis.Omnias potus in nobilis piscinam!Nunquam transferre tata.Burguss accelerare, tanquam salvus planeta.Vae.A falsis, solem emeritis byssus.Heuretess trabem, tanquam dexter luna.Ecce, ferox lamia!Pol, neuter devirginato!</p>*/}
        {/*  <p>Ubi est fatalis stella?Zirbuss sunt orexiss de talis adelphis.Omnias potus in nobilis piscinam!Nunquam transferre tata.Burguss accelerare, tanquam salvus planeta.Vae.A falsis, solem emeritis byssus.Heuretess trabem, tanquam dexter luna.Ecce, ferox lamia!Pol, neuter devirginato!</p>*/}
        {/*  <p>Ubi est fatalis stella?Zirbuss sunt orexiss de talis adelphis.Omnias potus in nobilis piscinam!Nunquam transferre tata.Burguss accelerare, tanquam salvus planeta.Vae.A falsis, solem emeritis byssus.Heuretess trabem, tanquam dexter luna.Ecce, ferox lamia!Pol, neuter devirginato!</p>*/}
        {/*  <p>Ubi est fatalis stella?Zirbuss sunt orexiss de talis adelphis.Omnias potus in nobilis piscinam!Nunquam transferre tata.Burguss accelerare, tanquam salvus planeta.Vae.A falsis, solem emeritis byssus.Heuretess trabem, tanquam dexter luna.Ecce, ferox lamia!Pol, neuter devirginato!</p>*/}
        {/*  <p>Ubi est fatalis stella?Zirbuss sunt orexiss de talis adelphis.Omnias potus in nobilis piscinam!Nunquam transferre tata.Burguss accelerare, tanquam salvus planeta.Vae.A falsis, solem emeritis byssus.Heuretess trabem, tanquam dexter luna.Ecce, ferox lamia!Pol, neuter devirginato!</p>*/}
        {/*  <p>Ubi est fatalis stella?Zirbuss sunt orexiss de talis adelphis.Omnias potus in nobilis piscinam!Nunquam transferre tata.Burguss accelerare, tanquam salvus planeta.Vae.A falsis, solem emeritis byssus.Heuretess trabem, tanquam dexter luna.Ecce, ferox lamia!Pol, neuter devirginato!</p>*/}
        {/*  <p>Ubi est fatalis stella?Zirbuss sunt orexiss de talis adelphis.Omnias potus in nobilis piscinam!Nunquam transferre tata.Burguss accelerare, tanquam salvus planeta.Vae.A falsis, solem emeritis byssus.Heuretess trabem, tanquam dexter luna.Ecce, ferox lamia!Pol, neuter devirginato!</p>*/}
        {/*  <p>Ubi est fatalis stella?Zirbuss sunt orexiss de talis adelphis.Omnias potus in nobilis piscinam!Nunquam transferre tata.Burguss accelerare, tanquam salvus planeta.Vae.A falsis, solem emeritis byssus.Heuretess trabem, tanquam dexter luna.Ecce, ferox lamia!Pol, neuter devirginato!</p>*/}
        {/*  <p>Ubi est fatalis stella?Zirbuss sunt orexiss de talis adelphis.Omnias potus in nobilis piscinam!Nunquam transferre tata.Burguss accelerare, tanquam salvus planeta.Vae.A falsis, solem emeritis byssus.Heuretess trabem, tanquam dexter luna.Ecce, ferox lamia!Pol, neuter devirginato!</p>*/}
        {/*</div>*/}
      {/*</div>      */}

      {/* <div
        className="container"
      >
        <h1
          className="bg-gray-300 text-gray-700 font-bold sticky top-0 z-"
        >
          titulo 1
        </h1>
        <p>Agripetas assimilant in virundum!Sunt eposes vitare camerarius, azureus lunaes.Abactus barbatus pars est.Grandis ionicis tormento solite locuss luna est.</p>
        <p>Agripetas assimilant in virundum!Sunt eposes vitare camerarius, azureus lunaes.Abactus barbatus pars est.Grandis ionicis tormento solite locuss luna est.</p>
        <p>Agripetas assimilant in virundum!Sunt eposes vitare camerarius, azureus lunaes.Abactus barbatus pars est.Grandis ionicis tormento solite locuss luna est.</p>
        <p>Agripetas assimilant in virundum!Sunt eposes vitare camerarius, azureus lunaes.Abactus barbatus pars est.Grandis ionicis tormento solite locuss luna est.</p>

        <h1
          className="bg-gray-300 text-gray-700 font-bold sticky top-0"
        >
          titulo 2
        </h1>
        <p>Agripetas assimilant in virundum!Sunt eposes vitare camerarius, azureus lunaes.Abactus barbatus pars est.Grandis ionicis tormento solite locuss luna est.</p>
        <p>Agripetas assimilant in virundum!Sunt eposes vitare camerarius, azureus lunaes.Abactus barbatus pars est.Grandis ionicis tormento solite locuss luna est.</p>
        <p>Agripetas assimilant in virundum!Sunt eposes vitare camerarius, azureus lunaes.Abactus barbatus pars est.Grandis ionicis tormento solite locuss luna est.</p>
        <p>Agripetas assimilant in virundum!Sunt eposes vitare camerarius, azureus lunaes.Abactus barbatus pars est.Grandis ionicis tormento solite locuss luna est.</p>

        <h1
          className="bg-gray-300 text-gray-700 font-bold sticky top-0"
        >
          titulo 3
        </h1>
        <p>Agripetas assimilant in virundum!Sunt eposes vitare camerarius, azureus lunaes.Abactus barbatus pars est.Grandis ionicis tormento solite locuss luna est.</p>
        <p>Agripetas assimilant in virundum!Sunt eposes vitare camerarius, azureus lunaes.Abactus barbatus pars est.Grandis ionicis tormento solite locuss luna est.</p>
        <p>Agripetas assimilant in virundum!Sunt eposes vitare camerarius, azureus lunaes.Abactus barbatus pars est.Grandis ionicis tormento solite locuss luna est.</p>
        <p>Agripetas assimilant in virundum!Sunt eposes vitare camerarius, azureus lunaes.Abactus barbatus pars est.Grandis ionicis tormento solite locuss luna est.</p>
      </div> */}


      <div className="container">
        <div className="bg-gray-300 flex">
          <div className="bg-gray-400 text-gray-700 px-2 m-2 py-2 flex-1">1</div>
          <div className="bg-gray-400 text-gray-700 px-2 m-2 py-2 flex-1">2</div>
          <div className="bg-gray-400 text-gray-700 px-2 m-2 py-2">3</div>
        </div>
      </div>
    </>
  )
}

// block -> con margen
// inline-block -> con margen
// inline -> sin margen

export default About

