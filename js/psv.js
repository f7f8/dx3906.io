const showPSV = function(viewerElement, gallery){
  const baseUrl = 'assets/';
  const scenes = $(gallery).find("scene");
  const ga = {
    visibleOnLoad: true,
    hideOnClick: false,
    items: []
  };

  for(let i=0; i< scenes.length; i++) {
    const s = $(scenes[i]);
    console.log(s.data("caption"));
    console.log(s.data("image"));

    const gi = {
      id: 'scene' + i,
      name: s.data("caption"),
      panorama: s.data("image"),
      thumbnail: s.data("image")
    };

    ga.items.push(gi);
  }

  const viewer = new PhotoSphereViewer.Viewer({
    container: viewerElement,
    panorama: ga.items[0].panorama,
    caption: ga.items[0].name,
    navbar: ['zoom', 'gallery', 'caption', 'markers', 'markersList', 'fullscreen'],
    plugins: [
      [PhotoSphereViewer.GalleryPlugin, ga],
    ],

  });

  viewer.addEventListener('ready', () => {
    console.log(`viewer is ready`);
  }, { once: true });

  viewer.addEventListener('position-updated', ({ position }) => {
    console.log(`new position is yaw: ${position.yaw} pitch: ${position.pitch}`);
  });

  viewer.addEventListener('zoom-updated', ({ zoomLevel }) => {
    console.log(`new zoom level is ${zoomLevel}`);
  });

  //const markersPlugin = viewer.getPlugin(PhotoSphereViewer.MarkersPlugin);
  //viewer.addEventListener('ready', () => {
  //  viewer
  //    .animate({
  //      yaw: -0.15,
  //      pitch: -0.3,
  //      speed: 1000,
  //    })
  //    .then(() => {
  //      //markersPlugin.showMarkerTooltip('custom-tooltip');
  //    });
  //}, { once: true });
}
