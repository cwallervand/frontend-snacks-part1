import { useRef } from 'react';

import QuoteCard from './components/QuoteCard';

function App() {
  const dialogRef = useRef();
  return (
    <main className="p-12">
      <h1 className="text-center text-4xl font-bold mb-8">
        CSS and HTML Treats
      </h1>
      <section>
        <h2 className="text-center text-2xl font-bold mb-4">
          CSS Container Queries
        </h2>
        <div className="quoteContainer">
          <QuoteCard />
        </div>
        <div className="flex justify-center mt-4">
          <button
            className="bg-indigo-400 p-4 rounded-md"
            type="button"
            onClick={() => dialogRef.current?.showModal()}
          >
            Open modal
          </button>
        </div>
        <section className="mt-8 grid grid-cols-4 gap-4">
          <div className="container1 bg-indigo-400 p-4 rounded-md">
            <p>
              This p-tag has padding relative to the query container`s width.
            </p>
          </div>
          <div className="container2 bg-indigo-400 rounded-md p-2">
            <p>
              This p-tag has bold font when container width is greater than
              250px
            </p>
          </div>
          <div className="container3 bg-indigo-400 rounded-md p-2">
            <p>
              Trying to style this based on container heigh, but the
              `container-type` is using `inline-size` so it doenst work.
            </p>
          </div>
          <div className="container4 bg-indigo-400 rounded-md p-2">
            <p>
              This p-tag has bold font when container width is greater than
              100px
            </p>
          </div>
          <div className="container5 bg-indigo-400 rounded-md p-2">
            <div>
              <p>
                This p-tag has bold font when container width is greater than
                100px
              </p>
            </div>
          </div>
        </section>

        <dialog ref={dialogRef} className="w-64">
          <button autoFocus onClick={() => dialogRef.current?.close()}>
            Close
          </button>
          <div className="quoteContainer">
            <QuoteCard />
          </div>
          <form method="dialog">
            <button>Ok</button>
          </form>
        </dialog>
      </section>
      <section>
        <h2 className="text-center text-2xl font-bold mb-4">:has selector</h2>
        <div className="concur rounded rounded-lg border border-2 p-8">
          <div className="flex gap-2">
            <input type="checkbox" id="has-checkbox" />
            <label htmlFor="has-checkbox">Do you concur?</label>
          </div>
          <div className="concur-warning italic text-lg">
            <div className="overflow-hidden">
              By concuring you agree to my terms and conditions. Your entire
              life is now mine. Thank you, come again!
            </div>
          </div>
        </div>
        <div className="after-concur rounded rounded-md my-4 p-2">
          Well, hello there!
        </div>
        <div className="flex">
          <div className="square rounded rounded-md w-10 h-10  bg-indigo-400 m-4"></div>
          <div className="square rounded rounded-md w-10 h-10  bg-indigo-400 m-4"></div>
          <div className="circle rounded rounded-full w-10 h-10  bg-indigo-400 m-4"></div>
          <div className="square rounded rounded-md w-10 h-10  bg-indigo-400 m-4"></div>
        </div>
      </section>
      <section>
        <h2 className="text-center text-2xl font-bold mb-4">
          Image lazy loading
          <p>
            <a href="https://caniuse.com/loading-lazy-attr">Can I use it?</a>
          </p>
        </h2>
        <div className="flex flex-col">
          <div className="flex justify-center mb-12">
            <img
              src="/thesis_defense.png"
              className="w-2/4"
              alt="thesis defence"
            />
          </div>
          <p className="mb-4">
            xkcd is a webcomic created by Randall Munroe that often touches on
            science, technology, and mathematics.
          </p>
          <p className="mb-4">
            The humor in xkcd is known for being both intellectual and quirky,
            appealing to a wide range of readers.
          </p>
          <p className="mb-4">
            One of the most famous xkcd comics is "Standards," which humorously
            illustrates the problem of too many competing standards in
            technology.
          </p>
          <p className="mb-4">
            Randall Munroe, the creator of xkcd, was a physicist and worked for
            NASA before becoming a full-time cartoonist.
          </p>
          <p className="mb-4">
            xkcd often features stick figures to convey complex ideas in a
            simple and minimalist way.
          </p>
          <p className="mb-4">
            In addition to its regular comics, xkcd is known for interactive and
            experimental comics, like "Click and Drag" and "Time."
          </p>
          <p className="mb-4">
            Many xkcd comics come with hover text, offering additional jokes or
            insights when the reader mouses over the image.
          </p>
          <p className="mb-4">
            Aside from the webcomic, Randall Munroe has authored popular books
            like "What If?" and "Thing Explainer."
          </p>
          <p className="mb-4">
            Despite its simple art style, xkcd often explores profound and
            philosophical questions through its humor.
          </p>
          <p className="mb-4">
            xkcd is beloved by scientists, engineers, and nerds around the world
            for its clever blend of wit and technical accuracy.
          </p>

          <p className="mb-4">
            The name xkcd doesn’t stand for anything; Randall Munroe has
            explained it as a word without a phonetic pronunciation to avoid
            meaning drift.
          </p>
          <p className="mb-4">
            xkcd covers a wide variety of topics, including programming, space
            exploration, relationships, and internet culture.
          </p>
          <p className="mb-4">
            One recurring theme in xkcd is a love of maps, charts, and
            infographics, often presented in a humorous or absurd context.
          </p>
          <p className="mb-4">
            Some xkcd comics poke fun at modern software development practices,
            with topics like automation, version control, and regular
            expressions.
          </p>
          <p className="mb-4">
            The xkcd comic "Password Strength" introduced the idea of using
            longer passphrases instead of complicated, short passwords for
            better security.
          </p>
          <p className="mb-4">
            Munroe’s background in science frequently shines through in xkcd,
            with comics exploring physics, math problems, and scientific thought
            experiments.
          </p>
          <p className="mb-4">
            The community around xkcd is active, with fans frequently discussing
            comics in detail and participating in related projects like
            explainxkcd.com.
          </p>
          <p className="mb-4">
            In addition to the humor, some xkcd comics are poignant or
            reflective, capturing the emotional side of human experiences.
          </p>
          <p className="mb-4">
            Randall Munroe sometimes updates xkcd comics after publication to
            reflect corrections or community feedback, making it a dynamic work.
          </p>
          <p className="mb-4">
            The xkcd store offers prints of popular comics, t-shirts, and other
            merchandise that reflect the comic’s geeky charm.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a
            nisi a dui ornare pellentesque sed sit amet dui. Aenean rutrum arcu
            sit amet arcu lacinia tempus. Duis sit amet nisi consequat ante
            lobortis tempor a ac orci. Fusce ac pharetra dui, a placerat eros.
            Vestibulum libero orci, feugiat sit amet maximus eget, tincidunt at
            enim. Etiam non purus fermentum, interdum lacus eu, porttitor orci.
            Maecenas vestibulum sapien nec sollicitudin ornare. Nam quam libero,
            condimentum eu consequat non, commodo eu mauris. Etiam ut mi turpis.
            Nunc vel interdum nulla, quis hendrerit ex. Nam iaculis rhoncus
            orci, ac euismod arcu iaculis et. Maecenas suscipit, risus ac
            aliquet laoreet, lacus justo ultricies ex, ut pellentesque ante
            mauris ut odio. Sed eget condimentum enim. Aenean a tristique dui.
            In ut ornare dui. Duis suscipit nisi non imperdiet mollis. Maecenas
            nibh massa, laoreet at leo ut, elementum aliquet enim. Mauris auctor
            quam non elementum vehicula. Integer aliquet pellentesque
            ullamcorper. Aliquam orci urna, imperdiet at pretium eget, pharetra
            non turpis. Fusce pulvinar ligula ac velit condimentum, sed laoreet
            erat fringilla. Cras semper laoreet leo, id rhoncus libero feugiat
            sed. Nullam sed metus elit. Interdum et malesuada fames ac ante
            ipsum primis in faucibus. Curabitur facilisis purus nec blandit
            pellentesque. Quisque imperdiet cursus metus, eget aliquet enim
            malesuada sed. Sed dolor libero, luctus in sem quis, ultrices
            convallis quam. Maecenas eget erat ut est facilisis posuere. Donec
            aliquam sollicitudin dolor, quis rutrum risus. Morbi non ultricies
            velit. Cras sit amet mauris laoreet, vulputate turpis suscipit,
            ultrices odio. Etiam pellentesque augue risus, sit amet lacinia
            ipsum tempus sit amet. Aenean metus risus, egestas at quam vitae,
            maximus tempus enim. Vivamus massa ex, vulputate at ultricies non,
            ornare vehicula orci. Mauris eget felis in sem hendrerit bibendum in
            ac odio. Quisque finibus dapibus turpis nec laoreet. In ex risus,
            dignissim porttitor auctor vitae, venenatis id neque. Class aptent
            taciti sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Integer ut efficitur eros. In finibus rutrum neque, eget
            egestas turpis fermentum id. Nulla non neque nisi. Mauris nec lacus
            in purus cursus convallis ut eu leo. Nunc varius ante nisi, in
            vulputate eros tempus eget. Quisque in augue ut risus auctor
            placerat viverra at sem. Phasellus eleifend justo eget arcu
            efficitur commodo. Vivamus pharetra eros elit, eget cursus metus
            gravida nec. Praesent tempus feugiat justo et feugiat. Suspendisse
            euismod ligula a nulla tempor mollis. Suspendisse ac aliquam lorem.
            Praesent ut massa eget urna ultricies placerat. Nunc luctus ante non
            tellus facilisis tempus. Vestibulum ante ipsum primis in faucibus
            orci luctus et ultrices posuere cubilia curae; Proin porttitor
            libero massa, sed egestas magna ultrices eu. Pellentesque posuere
            turpis ligula, eu egestas nisl bibendum vel. Phasellus rhoncus nisi
            a magna ultricies iaculis. Suspendisse at hendrerit odio. Sed tellus
            massa, commodo euismod enim sit amet, luctus venenatis nisl. Duis
            non mauris gravida, semper sem laoreet, viverra lectus. Pellentesque
            id tempor mauris, eleifend aliquam augue. Etiam bibendum fringilla
            arcu quis pretium. Nulla quis orci placerat, scelerisque nisl ut,
            pulvinar eros. Duis blandit diam eget fermentum fermentum. Phasellus
            bibendum, odio ac aliquet faucibus, libero leo sollicitudin nunc,
            non bibendum diam enim eu ex. Donec posuere placerat risus sit amet
            consectetur. Duis mattis molestie ante, quis gravida erat
            sollicitudin in. Aliquam erat volutpat. Pellentesque aliquam dui in
            orci fringilla viverra. Curabitur eu egestas risus. Curabitur
            dapibus purus ante, vel varius turpis iaculis sed. Fusce at
            malesuada est. Quisque erat justo, condimentum in semper sed,
            condimentum et risus. Phasellus sagittis elit ut erat iaculis, id
            finibus nulla consequat. Pellentesque nisi lorem, blandit ut
            suscipit in, sodales et elit. Proin gravida orci a lorem mattis,
            pellentesque interdum diam condimentum. Maecenas ut urna at leo
            sollicitudin gravida. Quisque porta dignissim erat sit amet aliquam.
            Vestibulum ut est a quam commodo posuere id vitae mauris. In hac
            habitasse platea dictumst. Quisque et elit libero. Aenean imperdiet
            felis eget elit gravida cursus. Aliquam turpis nulla, gravida
            laoreet metus vel, accumsan ultrices nibh. Phasellus et aliquam
            nisi. Quisque a diam libero. Sed ultrices convallis lectus, eu
            sollicitudin quam laoreet in. In rutrum, est nec ultricies suscipit,
            nunc velit tincidunt eros, at tristique lectus erat non nisi.
            Vivamus lorem lectus, finibus at imperdiet in, rutrum at ipsum. In
            elit elit, hendrerit vel bibendum ac, ornare sed justo. Fusce sit
            amet odio quis massa ultrices iaculis id ut odio. Morbi sit amet
            augue facilisis, tincidunt arcu a, aliquet augue. Proin vel auctor
            nulla, at tristique ipsum. Donec enim est, ultricies quis leo id,
            vulputate porta velit. Fusce convallis nulla ante, ac dignissim
            sapien volutpat eget. Nulla non nisi diam. Donec convallis nisl sed
            auctor aliquam. Integer fringilla aliquam mauris, volutpat congue
            mauris ullamcorper ac. In hac habitasse platea dictumst. Mauris vel
            feugiat mauris, non tincidunt magna. Mauris interdum sapien elit,
            vitae condimentum nulla interdum vulputate. Aliquam nec risus
            placerat, lacinia turpis vitae, hendrerit ex. Integer vel risus a
            lectus aliquam sodales eget vel enim. Vestibulum ultrices feugiat
            dolor non convallis. Duis vitae pulvinar eros. Praesent vel lacus
            sed ipsum euismod molestie a ac nunc. Mauris aliquam mi ut viverra
            iaculis. Nunc commodo ipsum eget tellus posuere, vel lacinia turpis
            tempus. Aliquam eu vestibulum est. Etiam efficitur augue quis
            vehicula rutrum. Donec augue nisl, condimentum ut nunc eget,
            facilisis rutrum massa. Nam nec turpis in tortor sagittis pulvinar.
            Mauris et nisi quis ex feugiat cursus. Phasellus tempus luctus
            magna, non interdum est. Curabitur venenatis sagittis lacus eu
            congue. Donec eu rhoncus erat. Proin eget orci sapien. Fusce
            volutpat id nisl et tincidunt. Fusce elementum magna et blandit
            finibus. Nullam venenatis nulla ac scelerisque luctus. Proin vel
            vehicula eros. Vestibulum cursus odio dolor, eu elementum neque
            cursus non. Curabitur porttitor ex et rhoncus feugiat. Aliquam ut
            diam ut elit elementum ultrices in sit amet massa. Nulla sit amet
            diam sit amet erat mollis lobortis. Maecenas in rhoncus nisi.
            Curabitur non mollis ligula. Vivamus nec tortor ac erat rhoncus
            lobortis vel porta mauris. Sed finibus justo id ligula accumsan
            aliquet. Aenean cursus leo a massa sagittis pharetra. Integer
            sagittis accumsan sollicitudin. Aenean laoreet nulla eu gravida
            eleifend. Maecenas ex turpis, faucibus a tempus sit amet, fermentum
            eget augue. Aenean eget nisl egestas, tristique metus ac, porta
            odio. Curabitur eget ornare turpis.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a
            nisi a dui ornare pellentesque sed sit amet dui. Aenean rutrum arcu
            sit amet arcu lacinia tempus. Duis sit amet nisi consequat ante
            lobortis tempor a ac orci. Fusce ac pharetra dui, a placerat eros.
            Vestibulum libero orci, feugiat sit amet maximus eget, tincidunt at
            enim. Etiam non purus fermentum, interdum lacus eu, porttitor orci.
            Maecenas vestibulum sapien nec sollicitudin ornare. Nam quam libero,
            condimentum eu consequat non, commodo eu mauris. Etiam ut mi turpis.
            Nunc vel interdum nulla, quis hendrerit ex. Nam iaculis rhoncus
            orci, ac euismod arcu iaculis et. Maecenas suscipit, risus ac
            aliquet laoreet, lacus justo ultricies ex, ut pellentesque ante
            mauris ut odio. Sed eget condimentum enim. Aenean a tristique dui.
            In ut ornare dui. Duis suscipit nisi non imperdiet mollis. Maecenas
            nibh massa, laoreet at leo ut, elementum aliquet enim. Mauris auctor
            quam non elementum vehicula. Integer aliquet pellentesque
            ullamcorper. Aliquam orci urna, imperdiet at pretium eget, pharetra
            non turpis. Fusce pulvinar ligula ac velit condimentum, sed laoreet
            erat fringilla. Cras semper laoreet leo, id rhoncus libero feugiat
            sed. Nullam sed metus elit. Interdum et malesuada fames ac ante
            ipsum primis in faucibus. Curabitur facilisis purus nec blandit
            pellentesque. Quisque imperdiet cursus metus, eget aliquet enim
            malesuada sed. Sed dolor libero, luctus in sem quis, ultrices
            convallis quam. Maecenas eget erat ut est facilisis posuere. Donec
            aliquam sollicitudin dolor, quis rutrum risus. Morbi non ultricies
            velit. Cras sit amet mauris laoreet, vulputate turpis suscipit,
            ultrices odio. Etiam pellentesque augue risus, sit amet lacinia
            ipsum tempus sit amet. Aenean metus risus, egestas at quam vitae,
            maximus tempus enim. Vivamus massa ex, vulputate at ultricies non,
            ornare vehicula orci. Mauris eget felis in sem hendrerit bibendum in
            ac odio. Quisque finibus dapibus turpis nec laoreet. In ex risus,
            dignissim porttitor auctor vitae, venenatis id neque. Class aptent
            taciti sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Integer ut efficitur eros. In finibus rutrum neque, eget
            egestas turpis fermentum id. Nulla non neque nisi. Mauris nec lacus
            in purus cursus convallis ut eu leo. Nunc varius ante nisi, in
            vulputate eros tempus eget. Quisque in augue ut risus auctor
            placerat viverra at sem. Phasellus eleifend justo eget arcu
            efficitur commodo. Vivamus pharetra eros elit, eget cursus metus
            gravida nec. Praesent tempus feugiat justo et feugiat. Suspendisse
            euismod ligula a nulla tempor mollis. Suspendisse ac aliquam lorem.
            Praesent ut massa eget urna ultricies placerat. Nunc luctus ante non
            tellus facilisis tempus. Vestibulum ante ipsum primis in faucibus
            orci luctus et ultrices posuere cubilia curae; Proin porttitor
            libero massa, sed egestas magna ultrices eu. Pellentesque posuere
            turpis ligula, eu egestas nisl bibendum vel. Phasellus rhoncus nisi
            a magna ultricies iaculis. Suspendisse at hendrerit odio. Sed tellus
            massa, commodo euismod enim sit amet, luctus venenatis nisl. Duis
            non mauris gravida, semper sem laoreet, viverra lectus. Pellentesque
            id tempor mauris, eleifend aliquam augue. Etiam bibendum fringilla
            arcu quis pretium. Nulla quis orci placerat, scelerisque nisl ut,
            pulvinar eros. Duis blandit diam eget fermentum fermentum. Phasellus
            bibendum, odio ac aliquet faucibus, libero leo sollicitudin nunc,
            non bibendum diam enim eu ex. Donec posuere placerat risus sit amet
            consectetur. Duis mattis molestie ante, quis gravida erat
            sollicitudin in. Aliquam erat volutpat. Pellentesque aliquam dui in
            orci fringilla viverra. Curabitur eu egestas risus. Curabitur
            dapibus purus ante, vel varius turpis iaculis sed. Fusce at
            malesuada est. Quisque erat justo, condimentum in semper sed,
            condimentum et risus. Phasellus sagittis elit ut erat iaculis, id
            finibus nulla consequat. Pellentesque nisi lorem, blandit ut
            suscipit in, sodales et elit. Proin gravida orci a lorem mattis,
            pellentesque interdum diam condimentum. Maecenas ut urna at leo
            sollicitudin gravida. Quisque porta dignissim erat sit amet aliquam.
            Vestibulum ut est a quam commodo posuere id vitae mauris. In hac
            habitasse platea dictumst. Quisque et elit libero. Aenean imperdiet
            felis eget elit gravida cursus. Aliquam turpis nulla, gravida
            laoreet metus vel, accumsan ultrices nibh. Phasellus et aliquam
            nisi. Quisque a diam libero. Sed ultrices convallis lectus, eu
            sollicitudin quam laoreet in. In rutrum, est nec ultricies suscipit,
            nunc velit tincidunt eros, at tristique lectus erat non nisi.
            Vivamus lorem lectus, finibus at imperdiet in, rutrum at ipsum. In
            elit elit, hendrerit vel bibendum ac, ornare sed justo. Fusce sit
            amet odio quis massa ultrices iaculis id ut odio. Morbi sit amet
            augue facilisis, tincidunt arcu a, aliquet augue. Proin vel auctor
            nulla, at tristique ipsum. Donec enim est, ultricies quis leo id,
            vulputate porta velit. Fusce convallis nulla ante, ac dignissim
            sapien volutpat eget. Nulla non nisi diam. Donec convallis nisl sed
            auctor aliquam. Integer fringilla aliquam mauris, volutpat congue
            mauris ullamcorper ac. In hac habitasse platea dictumst. Mauris vel
            feugiat mauris, non tincidunt magna. Mauris interdum sapien elit,
            vitae condimentum nulla interdum vulputate. Aliquam nec risus
            placerat, lacinia turpis vitae, hendrerit ex. Integer vel risus a
            lectus aliquam sodales eget vel enim. Vestibulum ultrices feugiat
            dolor non convallis. Duis vitae pulvinar eros. Praesent vel lacus
            sed ipsum euismod molestie a ac nunc. Mauris aliquam mi ut viverra
            iaculis. Nunc commodo ipsum eget tellus posuere, vel lacinia turpis
            tempus. Aliquam eu vestibulum est. Etiam efficitur augue quis
            vehicula rutrum. Donec augue nisl, condimentum ut nunc eget,
            facilisis rutrum massa. Nam nec turpis in tortor sagittis pulvinar.
            Mauris et nisi quis ex feugiat cursus. Phasellus tempus luctus
            magna, non interdum est. Curabitur venenatis sagittis lacus eu
            congue. Donec eu rhoncus erat. Proin eget orci sapien. Fusce
            volutpat id nisl et tincidunt. Fusce elementum magna et blandit
            finibus. Nullam venenatis nulla ac scelerisque luctus. Proin vel
            vehicula eros. Vestibulum cursus odio dolor, eu elementum neque
            cursus non. Curabitur porttitor ex et rhoncus feugiat. Aliquam ut
            diam ut elit elementum ultrices in sit amet massa. Nulla sit amet
            diam sit amet erat mollis lobortis. Maecenas in rhoncus nisi.
            Curabitur non mollis ligula. Vivamus nec tortor ac erat rhoncus
            lobortis vel porta mauris. Sed finibus justo id ligula accumsan
            aliquet. Aenean cursus leo a massa sagittis pharetra. Integer
            sagittis accumsan sollicitudin. Aenean laoreet nulla eu gravida
            eleifend. Maecenas ex turpis, faucibus a tempus sit amet, fermentum
            eget augue. Aenean eget nisl egestas, tristique metus ac, porta
            odio. Curabitur eget ornare turpis.
          </p>
          <div className="flex justify-center mb-12">
            <img
              src="/sandwich.png"
              width={360}
              height={299}
              alt="XKCD Comic: Sandwhich"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
