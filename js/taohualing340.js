const baseUrl = 'assets/';
const viewer = new PhotoSphereViewer.Viewer({
  container: document.querySelector('#viewer'),
  panorama: baseUrl + 'panorama/taohualing-340m-20230721.jpg',
  caption: '桃花岭山脊步道 . 340米（2023/07/21）',
  navbar: ['zoom', 'caption', 'markers', 'markersList', 'fullscreen'],
  plugins: [
    [PhotoSphereViewer.MarkersPlugin, {
      markers: [
        {
          id: 'cstip-taohualing',
          tooltip: {
            content: document.querySelector('#cstip-taohualing-content').innerHTML,
            className: 'custom-tooltip',
            position: 'top',
            trigger: 'click',
          },
          position: { pitch: -0.5, yaw: -0.15 },
          image: baseUrl + 'images/pictos/pin-blue.png',
          size: { width: 48, height: 48 },
          anchor: 'bottom center',
          hoverScale: { amount: 1.5, easing: 'ease-in-out', duration: 500 },
        }
      ],
    }],
  ],

});

const markersPlugin = viewer.getPlugin(PhotoSphereViewer.MarkersPlugin);
viewer.addEventListener('ready', () => {
  viewer
    .animate({
      yaw: -0.15,
      pitch: -0.3,
      speed: 1000,
    })
    .then(() => {
      //markersPlugin.showMarkerTooltip('custom-tooltip');
    });
}, { once: true });

