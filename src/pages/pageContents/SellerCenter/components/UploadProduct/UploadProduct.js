import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ColorButton from '/src/components/button/ColorButton';
import MessageError from './MessageError';
import { onlyNumber } from '/src/utils/input';
import { trySave } from '../../utils/sellerRequest';
import { openNotification } from '/src/utils/notification';
import ImgUpload from '/public/assets/img-upload.png';
import { Container, Content, Warning, Form } from './style';
import { Button, Modal } from 'antd';

export const UploadProduct = () => {
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [imageSrc, setImageSrc] = useState(ImgUpload);
  const [productInfo, setProductInfo] = useState({
    product_name: '',
    image: '',
    price: '',
    shipping_method: 'DELIVERY',
    shipping_fee: '',
    stock: '',
    product_info: '',
  });

  const [productError, setProductError] = useState({
    product_name: '',
    image: '',
    price: '',
    shipping_fee: '',
    stock: '',
    product_info: '',
  });

  const uploadImageRef = useRef();
  const onChangeImage = (e) => {
    console.log(e.target.files);
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImageSrc(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
    setProductInfo({ ...productInfo, image: e.target.files[0] });
  };
  const onChangeProductInfo = (e) => {
    setProductInfo((info) => ({ ...info, [e.target.name]: e.target.value }));
  };
  const onClickImage = (e) => {
    e.preventDefault();
    uploadImageRef.current.click();
  };
  const onClickShippingMethod = (e) => {
    setProductInfo((info) => ({
      ...info,
      shipping_method: e.target.dataset.method,
    }));
  };

  const onClickCancel = () => {
    navigate('/seller_center');
  };

  const onClickSave = async () => {
    const result = await trySave(productInfo);

    if (result === true) {
      setIsModalVisible(true);
    } else {
      for (const key of Object.keys(productError)) {
        setProductError((error) => ({ ...error, [key]: '' }));
      }
      setProductError(result);
      openNotification({
        type: 'error',
        message: '상품 등록에 실패했습니다.',
        description: '각 입력창 하단 에러 메시지를 참고하세요.',
        placement: 'bottomLeft',
      });
    }
  };
  const onClickUploadMore = () => {
    setIsModalVisible(false);
    window.location.reload();
    window.scrollTo(0, 0);
  };

  return (
    <Container>
      <h2>상품 등록</h2>
      <Content>
        <Warning>
          <h3>*상품 등록 주의사항</h3>
          <article>
            - 너무 귀여운 사진은 심장이 아파올 수 있습니다.
            <br />
            <br />- Sometimes by losing a battle you find a new way to win the war.<br />
            때로는 승부에서 패해봐야 이기는 방법을 알게 된다.
            <br />
            <br />- I only have the power of persuasion.
            나의 가장 큰 장점은 상대를 설득하는 능력이다.
            <br />
            <br />- What separates the winners from the losers is how a person reacts to each new twist of fate.<br />
            승자와 패자의 차이는 무엇인가. 운명을 갈라놓을 주요 고비에서 어떻게 반응하느냐에 달려 있다.
            이것이다.
          </article>
        </Warning>
        <Form>
          <section>
            <label>상품 이미지</label>
            <img
              src={imageSrc}
              value={productInfo.image}
              onClick={onClickImage}
            />
            <input
              type="file"
              accept="image/*"
              ref={uploadImageRef}
              onChange={onChangeImage}
            />
              {productError.image && (
              <MessageError content={productError.image} />
            )}
          </section>
          <section>
            <label>상품명</label>
            <input
              name="product_name"
              value={productInfo.product_name}
              onChange={onChangeProductInfo}
              maxLength={50}
            />
             {productError.product_name && (
              <MessageError content={productError.product_name} />
            )}
            <label>판매가</label>
            <input
              name="price"
              value={productInfo.price}
              onInput={onlyNumber}
              onChange={onChangeProductInfo}
              maxLength={10}
            />
             {productError.price && (
              <MessageError content={productError.price} />
            )}
            <label>배송방법</label>
            <div>
              <ColorButton
                size="MS"
                width="150px"
                data-method="DELIVERY"
                onClick={onClickShippingMethod}
                color={
                  productInfo.shipping_method === 'DELIVERY' ? 'orange' : 'white'
                }
              >
                택배, 소포, 등기
              </ColorButton>
              <ColorButton
                size="MS"
                width="150px"
                data-method="PARCEL"
                onClick={onClickShippingMethod}
                color={
                  productInfo.shipping_method === 'PARCEL' ? 'orange' : 'white'
                }
              >
                직접배송(화물배달)
              </ColorButton>
            </div>
            <label>기본 배송비</label>
            <input
              name="shipping_fee"
              value={productInfo.shipping_fee}
              onInput={onlyNumber}
              onChange={onChangeProductInfo}
              maxLength={7}
            />
              {productError.shipping_fee && (
              <MessageError content={productError.shipping_fee} />
            )}
            <label>재고</label>
            <input
              name="stock"
              value={productInfo.stock}
              onInput={onlyNumber}
              onChange={onChangeProductInfo}
              maxLength={7}
            />
            {productError.stock && (
              <MessageError content={productError.stock} />
            )}
          </section>
          <section>
            <label>상품 상세 정보</label>
            <textarea
              name="product_info"
              value={productInfo.product_info}
              onChange={onChangeProductInfo}
            />
             {productError.product_info && (
              <MessageError content={productError.product_info} />
            )}
            <div>
              <ColorButton
                width="200px"
                size="M"
                color="white"
                onClick={onClickCancel}
              >
                취소
              </ColorButton>
              <ColorButton width="200px" size="M" onClick={onClickSave}>
                저장하기
              </ColorButton>
            </div>
          </section>
        </Form>
      </Content>
      <Modal
        title="상품 등록 성공 🥳"
        open={isModalVisible}
        footer={[
          <Button key="back" onClick={onClickUploadMore}>
            상품 더 등록하기
          </Button>,
          <Button
           key="link"
           type="primary"
           onClick={() => navigate('/seller')}
          >
          판매자 센터 가기
          </Button>,
        ]}
        centered
      >
        <p>상품 등록에 성공하셨습니다!</p>
      </Modal>
    </Container>
  );
};