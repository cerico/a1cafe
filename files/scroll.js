const pimages = [
    { pic: 'd4.jpg.webp', label: 'graphic' },
    { pic: 'atom.jpg.webp', label: 'graphic' },
    { pic: 'pyati.jpg.webp', label: 'graphic' },
    { pic: 'goats.jpg.webp', label: 'graphic' },
    { pic: 'd.jpeg.webp', label: 'graphic' },
    { pic: 'd4.jpg.webp', label: 'graphic' },
    { pic: 'd4.jpg.webp', label: 'graphic' },
    { pic: 'atom.jpg.webp', label: 'graphic' },
    { pic: 'pyati.jpg.webp', label: 'graphic' },
    { pic: 'goats.jpg.webp', label: 'graphic' },
    { pic: 'd.jpeg.webp', label: 'graphic' }
    ]
    
    const handleScrollu = () => {
        console.log(155)
        const sectionTops = [].map.call(document.getElementsByClassName('yola'), node => node.getBoundingClientRect().top + window.scrollY)
        const windowPosition = window.scrollY - (window.innerHeight * 0.3)
        const above = sectionTops.filter(e => e < windowPosition).length
        const image = pimages[above]
        if (document.getElementById('photo').src !== `files/${image.pic}`) {
            document.getElementById('photo').src = `files/${image.pic}`
            document.getElementById('photo').alt = `files/${image.label}`
        }
      };
      document.addEventListener('scroll', handleScrollu);