"use client";

import { useLanguage } from "@/context/LanguageContext";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function TermsPage() {
    const { language } = useLanguage();

    return (
        <main className="min-h-screen pt-24 pb-16">
            <div className="container mx-auto px-6 max-w-4xl">
                <ScrollAnimation animation="fade-in-up">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-accent dark:hover:text-accent transition-colors mb-8"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        {language === 'th' ? 'กลับสู่หน้าหลัก' : 'Back to Home'}
                    </Link>

                    <div className="bg-white dark:bg-zinc-900 rounded-2xl p-8 md:p-12 shadow-sm border border-zinc-200 dark:border-zinc-800">
                        {language === 'th' ? (
                            <article className="prose dark:prose-invert max-w-none">
                                <h1 className="text-3xl font-bold mb-8 text-[#0A2342] dark:text-white">เงื่อนไขการใช้งาน</h1>

                                <section className="mb-8">
                                    <h2 className="text-xl font-semibold mb-4 text-[#0A2342] dark:text-white">1. ข้อตกลงทั่วไป</h2>
                                    <p className="text-zinc-600 dark:text-zinc-300">
                                        การเข้าใช้เว็บไซต์ของ <strong>PT X</strong> ("บริษัท") ถือว่าท่านยอมรับข้อกำหนดและเงื่อนไขเหล่านี้ หากท่านไม่ยอมรับเงื่อนไขดังกล่าว กรุณาระงับการเข้าใช้งานเว็บไซต์
                                    </p>
                                </section>

                                <section className="mb-8">
                                    <h2 className="text-xl font-semibold mb-4 text-[#0A2342] dark:text-white">2. ทรัพย์สินทางปัญญา</h2>
                                    <p className="text-zinc-600 dark:text-zinc-300">
                                        เนื้อหาทั้งหมดบนเว็บไซต์นี้ รวมถึงข้อความ กราฟิก โลโก้ รูปภาพ และซอฟต์แวร์ เป็นทรัพย์สินของบริษัท หรือผู้ให้บริการเนื้อหา และได้รับความคุ้มครองตามกฎหมายลิขสิทธิ์ ห้ามมิให้ทำซ้ำ ดัดแปลง หรือเผยแพร่โดยไม่ได้รับอนุญาตเป็นลายลักษณ์อักษร
                                    </p>
                                </section>

                                <section className="mb-8">
                                    <h2 className="text-xl font-semibold mb-4 text-[#0A2342] dark:text-white">3. การจำกัดความรับผิด</h2>
                                    <p className="text-zinc-600 dark:text-zinc-300">
                                        ข้อมูลบนเว็บไซต์นี้จัดทำขึ้นเพื่อวัตถุประสงค์ในการให้ข้อมูลทั่วไปเท่านั้น บริษัทไม่รับรองความถูกต้อง สมบูรณ์ หรือเป็นปัจจุบันของข้อมูล และจะไม่รับผิดชอบต่อความเสียหายใดๆ ที่เกิดจากการใช้ข้อมูลบนเว็บไซต์นี้
                                    </p>
                                </section>

                                <section className="mb-8">
                                    <h2 className="text-xl font-semibold mb-4 text-[#0A2342] dark:text-white">4. ลิงก์ไปยังเว็บไซต์ภายนอก</h2>
                                    <p className="text-zinc-600 dark:text-zinc-300">
                                        เว็บไซต์นี้อาจมีลิงก์เชื่อมโยงไปยังเว็บไซต์ภายนอก บริษัทไม่ได้ควบคุมและไม่รับผิดชอบต่อเนื้อหาหรือนโยบายความเป็นส่วนตัวของเว็บไซต์เหล่านั้น
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-xl font-semibold mb-4 text-[#0A2342] dark:text-white">5. การแก้ไขเปลี่ยนแปลง</h2>
                                    <p className="text-zinc-600 dark:text-zinc-300">
                                        บริษัทขอสงวนสิทธิ์ในการแก้ไขเปลี่ยนแปลงเงื่อนไขการใช้งานเหล่านี้ได้ตลอดเวลา โดยไม่ต้องแจ้งให้ทราบล่วงหน้า
                                    </p>
                                </section>
                            </article>
                        ) : (
                            <article className="prose dark:prose-invert max-w-none">
                                <h1 className="text-3xl font-bold mb-8 text-[#0A2342] dark:text-white">Terms of Use</h1>

                                <section className="mb-8">
                                    <h2 className="text-xl font-semibold mb-4 text-[#0A2342] dark:text-white">1. General Agreement</h2>
                                    <p className="text-zinc-600 dark:text-zinc-300">
                                        By accessing the website of <strong>PT X</strong> ("Company"), you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use this website.
                                    </p>
                                </section>

                                <section className="mb-8">
                                    <h2 className="text-xl font-semibold mb-4 text-[#0A2342] dark:text-white">2. Intellectual Property</h2>
                                    <p className="text-zinc-600 dark:text-zinc-300">
                                        All content on this website, including text, graphics, logos, images, and software, is the property of the Company or its content suppliers and is protected by copyright laws. Unauthorized reproduction, modification, or distribution is strictly prohibited.
                                    </p>
                                </section>

                                <section className="mb-8">
                                    <h2 className="text-xl font-semibold mb-4 text-[#0A2342] dark:text-white">3. Limitation of Liability</h2>
                                    <p className="text-zinc-600 dark:text-zinc-300">
                                        The information on this website is for general information purposes only. The Company makes no warranties regarding the accuracy, completeness, or currency of the information and shall not be liable for any damages arising from the use of this website.
                                    </p>
                                </section>

                                <section className="mb-8">
                                    <h2 className="text-xl font-semibold mb-4 text-[#0A2342] dark:text-white">4. External Links</h2>
                                    <p className="text-zinc-600 dark:text-zinc-300">
                                        This website may contain links to external websites. The Company has no control over and assumes no responsibility for the content or privacy policies of those websites.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-xl font-semibold mb-4 text-[#0A2342] dark:text-white">5. Amendments</h2>
                                    <p className="text-zinc-600 dark:text-zinc-300">
                                        The Company reserves the right to modify these Terms of Use at any time without prior notice.
                                    </p>
                                </section>
                            </article>
                        )}
                    </div>
                </ScrollAnimation>
            </div>
        </main>
    );
}
