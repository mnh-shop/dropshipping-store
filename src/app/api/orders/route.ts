import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    // TODO: Integrate with Gelato/Printify order API
    // TODO: Save order to database
    // TODO: Send confirmation email

    console.log('Order received:', body);

    return NextResponse.json({
      success: true,
      orderId: `ORD-${Date.now()}`,
      message: 'Order received. Processing...',
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Invalid request' },
      { status: 400 }
    );
  }
}
