import React from 'react';
import { SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';

const html = `
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script type="text/javascript" src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=4cef8933d291be5dac7062383ef833fb"></script>
    <style>
        body, html {
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
        }
        #map {
            width: 100%;
            height: 100%;
        }
     
        .zoom-buttons {
            position: absolute;
            top: 50px;
            right: 10px;
            z-index: 10;
            display: flex;
            flex-direction: column;
        }
        .university-button {
            position: absolute;
            top: 50px;
            left: 10px;
            z-index: 10;
        }
        .btn {
            margin: 5px 0;
            padding: 10px;
            background-color: white;
            border: 1px solid #ddd;
            cursor: pointer;
        }
        .btn:hover {
            background-color: #eee;
        }
        .selected_btn {
            background-color: #eee;
            border-color: #999;
        }
    </style>
</head>
<body>
    <div id="map"></div>
    <div class="map-type-buttons">
        <button id="btnRoadmap" class="btn selected_btn" onclick="setMapType('roadmap')">지도</button>
        <button id="btnSkyview" class="btn" onclick="setMapType('skyview')">스카이뷰</button>
    </div>
    <div class="zoom-buttons">
        <button class="btn" onclick="zoomIn()">+</button>
        <button class="btn" onclick="zoomOut()">-</button>
    </div>
    <div class="university-button">
        <button id="goToUniversity" class="btn" onclick="goToUniversity()">10중앙도서관 바로가기</button>
    </div>
    <script type="text/javascript">
        (function () {
            var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
                mapOption = { 
                    center: new kakao.maps.LatLng(36.354575, 127.421362), // 지도의 중심좌표
                    level: 4 // 지도의 확대 레벨 
                }; 

            var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

            // HTML5의 geolocation으로 사용할 수 있는지 확인합니다 
            if (navigator.geolocation) {
                
                // GeoLocation을 이용해서 접속 위치를 얻어옵니다
                navigator.geolocation.getCurrentPosition(function(position) {
                    
                    var lat = position.coords.latitude, // 위도
                        lon = position.coords.longitude; // 경도
                    
                    var locPosition = new kakao.maps.LatLng(lat, lon), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
                        message = '<div style="padding:5px;">여기에 계신가요?!</div>'; // 인포윈도우에 표시될 내용입니다
                    
                    // 마커와 인포윈도우를 표시합니다
                    displayMarker(locPosition, message);
                        
                  });
                
            } else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
                
                var locPosition = new kakao.maps.LatLng(33.450701, 126.570667),    
                    message = 'geolocation을 사용할수 없어요..'
                    
                displayMarker(locPosition, message);
            }

            // 지도에 마커와 인포윈도우를 표시하는 함수입니다
            function displayMarker(locPosition, message) {

                // 마커를 생성합니다
                var marker = new kakao.maps.Marker({  
                    map: map, 
                    position: locPosition
                }); 
                
                var iwContent = message, // 인포윈도우에 표시할 내용
                    iwRemoveable = true;

                // 인포윈도우를 생성합니다
                var infowindow = new kakao.maps.InfoWindow({
                    content : iwContent,
                    removable : iwRemoveable
                });
                
                // 인포윈도우를 마커위에 표시합니다 
                infowindow.open(map, marker);
                
                // 지도 중심좌표를 접속위치로 변경합니다
                map.setCenter(locPosition);      
            }

            // 지도타입 컨트롤의 지도 또는 스카이뷰 버튼을 클릭하면 호출되어 지도타입을 바꾸는 함수입니다
            window.setMapType = function(maptype) { 
                var roadmapControl = document.getElementById('btnRoadmap');
                var skyviewControl = document.getElementById('btnSkyview'); 
                if (maptype === 'roadmap') {
                    map.setMapTypeId(kakao.maps.MapTypeId.ROADMAP);    
                    roadmapControl.className = 'selected_btn';
                    skyviewControl.className = 'btn';
                } else {
                    map.setMapTypeId(kakao.maps.MapTypeId.HYBRID);    
                    skyviewControl.className = 'selected_btn';
                    roadmapControl.className = 'btn';
                }
            }

            // 지도 확대, 축소 컨트롤에서 확대 버튼을 누르면 호출되어 지도를 확대하는 함수입니다
            window.zoomIn = function() {
                map.setLevel(map.getLevel() - 1);
            }

            // 지도 확대, 축소 컨트롤에서 축소 버튼을 누르면 호출되어 지도를 확대하는 함수입니다
            window.zoomOut = function() {
                map.setLevel(map.getLevel() + 1);
            }

            // "공과대학 바로가기" 버튼을 클릭하면 공과대학으로 이동하는 함수입니다
            window.goToUniversity = function() {
                window.location.href = 'http://map.kakao.com/link/map/중앙도서관,36.352755,127.423555';
            }
        })();
    </script>
</body>
</html>
`;

const Gps = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <WebView source={{html: html}} />
    </SafeAreaView>
  );
};

export default Gps;
